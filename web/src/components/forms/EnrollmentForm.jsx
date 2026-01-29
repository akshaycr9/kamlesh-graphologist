import { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const EnrollmentForm = ({ planName, price, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "enrollments"), {
                ...formData,
                plan: planName,
                price: price, // Store price for reference
                status: 'pending_payment', // Pending since we skipped Razorpay
                createdAt: serverTimestamp()
            });

            setLoading(false);
            if (onSuccess) onSuccess();
            alert(`Enrollment Request Sent for ${planName}! We will contact you for payment.`);

        } catch (error) {
            console.error("Error submitting form: ", error);
            setLoading(false);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 mb-6">
                <p className="text-sm text-slate-500 mb-1">Selected Plan</p>
                <div className="flex justify-between items-center">
                    <h4 className="font-bold text-slate-800">{planName}</h4>
                    <span className="font-bold text-primary">{price}</span>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp Number</label>
                <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
                {loading ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Processing...
                    </span>
                ) : "Request Enrollment"}
            </button>
        </form>
    );
};

export default EnrollmentForm;
