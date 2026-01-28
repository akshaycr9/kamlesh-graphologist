import { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Why it Matters', href: '#why-matters' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Pricing', href: '#pricing' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80; // Height of the fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled
                ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-slate-200 dark:border-slate-800'
                : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            alt="Logo"
                            className="h-12 w-auto"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-XVZXOqcxpiKMKGQfwKuhMIijJCWup40lYtobB6PsKxCtP0IUUYkrXhNEML2T2bQPXA5ExlV6t8_tkinkmaYgahVSbKJUM5si8jtg6FocKFwTGYKYl1Lr2PjYBpx49Iw-x9q2P0msmnzTiulApOinIKtbLV3-eAapAMOhPO2pvqjfJzfQ60A1qVjj16uV6tQ2pFNIZMlZgGIqvHC7TMeFpXwVMIhPNn2aNAbcbSUilwOSScKcl7fSikQX3s_lTTSRE_BXspdBPjS8"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="font-medium hover:text-primary transition-colors text-sm lg:text-base text-slate-800 dark:text-slate-200 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Dark Mode Toggle */}
                        <button
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-200 cursor-pointer"
                            onClick={toggleDarkMode}
                        >
                            <span className="material-icons text-xl dark:hidden">dark_mode</span>
                            <span className="material-icons text-xl hidden dark:block">light_mode</span>
                        </button>

                        <a
                            href="#services"
                            onClick={(e) => handleNavClick(e, '#services')}
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
                        >
                            Get Analysis
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-200"
                            onClick={toggleDarkMode}
                        >
                            <span className="material-icons text-xl dark:hidden">dark_mode</span>
                            <span className="material-icons text-xl hidden dark:block">light_mode</span>
                        </button>
                        <button
                            className="text-slate-600 dark:text-slate-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="material-icons text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-xl py-6 px-6 flex flex-col space-y-6 overflow-y-auto z-40">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-slate-800 dark:text-slate-200 font-medium text-lg py-2 border-b border-slate-100 dark:border-slate-800"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, '#services')}
                        className="w-full bg-primary text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg shadow-primary/30"
                    >
                        Get Analysis
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
