
const Footer = () => {
    return (
        <footer className="bg-primary text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <img alt="Logo White" className="h-16 w-auto mb-6 brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFr5erjeE8uERKGrfjqqDlNva-aoqOPbqMPVyG-hKDeheU44lNec2via7uXgJMxKHbNeSP5qP5et28AznN8guZHpvudEloZaKsESFyorU62OW0kMu7x4gFtVeha9qs5ALXNpORLQbrGclx50u5CaPoBDP9sQEkKhfPfetZfIOiBY5g1InQpkJtB-pGeSzp1n7zsmIsbQERBmJI3sGRW-STtVEQmBm4qbGx9MbyMAXtb_EACuW-3_qvulckzk6CP0Axlji2BC0psxeE" />
                        <p className="text-slate-300 max-w-sm">Empowering individuals through the professional science of Graphology. Discover your true self today.</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold mb-6">Quick Links</h5>
                        <ul className="space-y-4 text-slate-300">
                            <li><a className="hover:text-secondary transition-colors" href="#home">Home</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#about">About Kamlesh</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#services">Our Services</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#pricing">Pricing Plans</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#testimonials">Success Stories</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold mb-6">Contact</h5>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-sm">email</span>
                                <span>contact@kamleshgidwani.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-sm">location_on</span>
                                <span>Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">© 2024 Kamlesh Gidwani Graphology. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
