import { useState } from 'react';
import Modal from './ui/Modal';
import EnrollmentForm from './forms/EnrollmentForm';

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

    const openEnrollment = (plan, price) => {
        setSelectedPlan(plan);
        setSelectedPrice(price);
        setIsEnrollModalOpen(true);
    };

    return (
        <section className="py-24 bg-white dark:bg-slate-900" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-6">Professional Services & Packages</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">Choose the right path for your personal growth and self-discovery journey.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-background-light dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Signature Analysis</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Expert analysis of your public persona</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-primary dark:text-secondary">Rs 1,500/-</span>
                        </div>
                        <ul className="space-y-3 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>Personal Brand Insight</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>Expert Feedback Session</span>
                            </li>
                        </ul>
                        <button
                            onClick={() => openEnrollment('Signature Analysis', 'Rs 1,500/-')}
                            className="w-full text-center py-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary font-bold rounded-xl hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-slate-900 transition-all cursor-pointer"
                        >
                            Select Package
                        </button>
                    </div>
                    <div className="bg-background-light dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Handwriting Analysis</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Full personality decoding through script</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-primary dark:text-secondary">Rs 1,500/-</span>
                        </div>
                        <ul className="space-y-3 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>Full Character Assessment</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>Mental Pattern Report</span>
                            </li>
                        </ul>
                        <button
                            onClick={() => openEnrollment('Handwriting Analysis', 'Rs 1,500/-')}
                            className="w-full text-center py-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary font-bold rounded-xl hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-slate-900 transition-all cursor-pointer"
                        >
                            Select Package
                        </button>
                    </div>
                    <div className="bg-primary p-8 rounded-3xl border border-primary flex flex-col shadow-lg shadow-primary/20 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-secondary text-primary font-bold text-xs px-4 py-1 rounded-bl-xl uppercase tracking-widest">Recommended</div>
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold mb-2 text-white">Signature Improvement</h4>
                            <p className="text-slate-300 text-sm">Re-branding your public image</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-white">Rs 10,000/-</span>
                        </div>
                        <ul className="space-y-3 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-slate-200">
                                <span className="material-icons text-secondary text-sm">check</span>
                                <span>2 Months Coaching</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-200">
                                <span className="material-icons text-secondary text-sm">check</span>
                                <span>Premium Study Material</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-200">
                                <span className="material-icons text-secondary text-sm">check</span>
                                <span>1-on-1 Mentorship</span>
                            </li>
                        </ul>
                        <button
                            onClick={() => openEnrollment('Signature Improvement', 'Rs 10,000/-')}
                            className="w-full text-center py-3 bg-white text-primary font-bold rounded-xl hover:bg-secondary hover:text-primary transition-all cursor-pointer"
                        >
                            Start Coaching
                        </button>
                    </div>
                    <div className="bg-background-light dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Handwriting Improvement (30 Days)</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Intensive rapid progress program</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-primary dark:text-secondary">Rs 5,000/-</span>
                        </div>
                        <ul className="space-y-3 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>30 Days Focused Coaching</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>Learning Materials Included</span>
                            </li>
                        </ul>
                        <button
                            onClick={() => openEnrollment('Handwriting Improvement (30 Days)', 'Rs 5,000/-')}
                            className="w-full text-center py-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary font-bold rounded-xl hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-slate-900 transition-all cursor-pointer"
                        >
                            Enroll Now
                        </button>
                    </div>
                    <div className="bg-background-light dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Handwriting Improvement (120 Days)</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Complete long-term transformation</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-primary dark:text-secondary">Rs 15,000/-</span>
                        </div>
                        <ul className="space-y-3 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>120 Days Holistic Coaching</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>Advanced Practice Materials</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>Progress Tracking Logs</span>
                            </li>
                        </ul>
                        <button
                            onClick={() => openEnrollment('Handwriting Improvement (120 Days)', 'Rs 15,000/-')}
                            className="w-full text-center py-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary font-bold rounded-xl hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-slate-900 transition-all cursor-pointer"
                        >
                            Enroll Now
                        </button>
                    </div>
                    <div className="bg-background-light dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Children's Coaching</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Shaping young minds for the future</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-primary dark:text-secondary">Rs 10,000/-</span>
                        </div>
                        <ul className="space-y-3 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>45 to 60 Days Coaching</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>Child-friendly Materials</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <span className="material-icons text-primary text-sm">check</span>
                                <span>Confidence Building Exercises</span>
                            </li>
                        </ul>
                        <button
                            onClick={() => openEnrollment("Children's Coaching", 'Rs 10,000/-')}
                            className="w-full text-center py-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary font-bold rounded-xl hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-slate-900 transition-all cursor-pointer"
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                title="Enrollment Request"
            >
                <div className="mb-4 text-slate-600 text-sm">
                    {/* Fill your details to request enrollment. We will contact you shortly. */}
                    Complete your request below.
                </div>
                <EnrollmentForm
                    planName={selectedPlan}
                    price={selectedPrice}
                    onSuccess={() => setIsEnrollModalOpen(false)}
                />
            </Modal>
        </section>
    );
};

export default Pricing;
