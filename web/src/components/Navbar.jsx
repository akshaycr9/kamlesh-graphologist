
import { useState } from 'react';

import Modal from './ui/Modal';
import LeadCaptureForm from './forms/LeadCaptureForm';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center gap-2">
                        <img alt="Logo" className="h-12 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-XVZXOqcxpiKMKGQfwKuhMIijJCWup40lYtobB6PsKxCtP0IUUYkrXhNEML2T2bQPXA5ExlV6t8_tkinkmaYgahVSbKJUM5si8jtg6FocKFwTGYKYl1Lr2PjYBpx49Iw-x9q2P0msmnzTiulApOinIKtbLV3-eAapAMOhPO2pvqjfJzfQ60A1qVjj16uV6tQ2pFNIZMlZgGIqvHC7TMeFpXwVMIhPNn2aNAbcbSUilwOSScKcl7fSikQX3s_lTTSRE_BXspdBPjS8" />
                    </div>
                    <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base cursor-pointer" href="#home">Home</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base cursor-pointer" href="#about">About</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base cursor-pointer" href="#why-matters">Why it Matters</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base cursor-pointer" href="#services">Services</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base cursor-pointer" href="#process">Process</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base cursor-pointer" href="#pricing">Pricing</a>
                        {/* Dark mode toggle removed */}
                        <button
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
                            onClick={() => setIsAnalysisModalOpen(true)}
                        >
                            Get Free Analysis
                        </button>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button className="text-slate-600 dark:text-slate-300 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <span className="material-icons text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl py-4 px-4 flex flex-col space-y-4">
                    <a className="font-medium hover:text-primary transition-colors text-base cursor-pointer" href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a className="font-medium hover:text-primary transition-colors text-base cursor-pointer" href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a className="font-medium hover:text-primary transition-colors text-base cursor-pointer" href="#why-matters" onClick={() => setMobileMenuOpen(false)}>Why it Matters</a>
                    <a className="font-medium hover:text-primary transition-colors text-base cursor-pointer" href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a className="font-medium hover:text-primary transition-colors text-base cursor-pointer" href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
                    <a className="font-medium hover:text-primary transition-colors text-base cursor-pointer" href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>

                    <button
                        className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity text-center w-full cursor-pointer"
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setIsAnalysisModalOpen(true);
                        }}
                    >
                        Get Free Analysis
                    </button>
                </div>
            )}

            <Modal
                isOpen={isAnalysisModalOpen}
                onClose={() => setIsAnalysisModalOpen(false)}
                title="Get Your Free Personality Analysis"
            >
                <div className="mb-4 bg-blue-50 text-blue-800 p-3 rounded-lg text-sm">
                    Upload a photo of your handwriting on a plain white paper. Write at least 4-5 lines.
                </div>
                <LeadCaptureForm onSuccess={() => setIsAnalysisModalOpen(false)} />
            </Modal>
        </nav>
    );
};

export default Navbar;
