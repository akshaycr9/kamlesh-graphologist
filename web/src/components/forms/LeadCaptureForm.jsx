import { useState } from 'react';
import { db, storage } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const LeadCaptureForm = ({ onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        goal: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let fileUrl = '';

            // 1. Upload Image if exists
            if (file) {
                const storageRef = ref(storage, `analysis-requests/${Date.now()}_${file.name}`);
                const snapshot = await uploadBytes(storageRef, file);
                fileUrl = await getDownloadURL(snapshot.ref);
            }

            // 2. Save Data to Firestore
            await addDoc(collection(db, "leads"), {
                ...formData,
                fileUrl,
                type: 'free_analysis',
                status: 'new',
                createdAt: serverTimestamp()
            });

            // 3. Success
            setLoading(false);
            if (onSuccess) onSuccess();
            alert("Application Submitted! Kamlesh will review your handwriting and email you shortly.");

        } catch (error) {
            console.error("Error submitting form: ", error);
            setLoading(false);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">What do you want to achieve?</label>
                <textarea
                    name="goal"
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none h-24"
                    placeholder="E.g. I want to improve my confidence..."
                    value={formData.goal}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Upload Handwriting Sample</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                    <input
                        type="file"
                        accept="image/*"
                        required
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                    />
                    <div className="flex flex-col items-center">
                        <span className="material-icons text-4xl text-slate-400 mb-2">cloud_upload</span>
                        <p className="text-sm font-medium text-slate-600">
                            {file ? file.name : "Click to upload an image of your handwriting"}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">JPG, PNG up to 5MB</p>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
                {loading ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Submitting...
                    </span>
                ) : "Get Free Analysis"}
            </button>
        </form>
    );
};

export default LeadCaptureForm;
