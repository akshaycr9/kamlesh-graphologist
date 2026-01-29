
import { useState } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center gap-2">
                        <img alt="Logo" className="h-12 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-XVZXOqcxpiKMKGQfwKuhMIijJCWup40lYtobB6PsKxCtP0IUUYkrXhNEML2T2bQPXA5ExlV6t8_tkinkmaYgahVSbKJUM5si8jtg6FocKFwTGYKYl1Lr2PjYBpx49Iw-x9q2P0msmnzTiulApOinIKtbLV3-eAapAMOhPO2pvqjfJzfQ60A1qVjj16uV6tQ2pFNIZMlZgGIqvHC7TMeFpXwVMIhPNn2aNAbcbSUilwOSScKcl7fSikQX3s_lTTSRE_BXspdBPjS8" />
                    </div>
                    <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base" href="#home">Home</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base" href="#about">About</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base" href="#why-matters">Why it Matters</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base" href="#services">Services</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base" href="#process">Process</a>
                        <a className="font-medium hover:text-primary transition-colors text-sm lg:text-base" href="#pricing">Pricing</a>
                        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={toggleDarkMode}>
                            <span className="material-icons text-xl dark:hidden">dark_mode</span>
                            <span className="material-icons text-xl hidden dark:block">light_mode</span>
                        </button>
                        <a className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap" href="#">Get Analysis</a>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button className="text-slate-600 dark:text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <span className="material-icons text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer (Functional addition, keeping styles consistent with theme) */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl py-4 px-4 flex flex-col space-y-4">
                    <a className="font-medium hover:text-primary transition-colors text-base" href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a className="font-medium hover:text-primary transition-colors text-base" href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a className="font-medium hover:text-primary transition-colors text-base" href="#why-matters" onClick={() => setMobileMenuOpen(false)}>Why it Matters</a>
                    <a className="font-medium hover:text-primary transition-colors text-base" href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a className="font-medium hover:text-primary transition-colors text-base" href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
                    <a className="font-medium hover:text-primary transition-colors text-base" href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-slate-600 dark:text-slate-300">Theme</span>
                        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={toggleDarkMode}>
                            <span className="material-icons text-xl dark:hidden">dark_mode</span>
                            <span className="material-icons text-xl hidden dark:block">light_mode</span>
                        </button>
                    </div>
                    <a className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity text-center" href="#" onClick={() => setMobileMenuOpen(false)}>Get Analysis</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
