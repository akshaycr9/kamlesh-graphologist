
const Testimonials = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-slate-900/50" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 relative shadow-sm">
                        <span className="material-icons text-primary/20 text-6xl absolute top-8 right-8">format_quote</span>
                        <div className="flex items-start gap-6 mb-8">
                            <img alt="Feedback Icon" className="w-20 h-20 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuaH47ToovGhhlraxW_JOipSrpl9Gh3SDz4H22rVnPfugRwpoOUlvZORwUc2cuZ7BQouillTMj7k6DqRBdvToQhvPhAAI943oW8FS1-hxfMJK67xpr9FB2bOJA6XxwzsEQ8VLU0tU2S-vrXOkeyh2R6-YZbYlh4NvYhzYxNHHyez32BLB7Oi5lorIGRFat2ihBQV8LdbWubIhKuufrBubE4cRvI_GLEXwCWDTBLaM4QuLZB5UUk1ZvlsWJ8c1alZXSRdgfX9updP_Q" />
                            <div>
                                <h4 className="text-xl font-bold">Hemant Mittal</h4>
                                <p className="text-primary font-medium">School Owner</p>
                                <div className="flex text-amber-400 mt-1">
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                            "Dear Kamlesh Ji. I’m highly grateful to you for analysis of my handwriting. When I went through your analytical points, it’s really very close to my nature and behavior. It’s such an amazing experience and it’s helpful me for betterment of my nature and behavior towards other people."
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 relative shadow-sm">
                        <span className="material-icons text-primary/20 text-6xl absolute top-8 right-8">format_quote</span>
                        <div className="flex items-start gap-6 mb-8">
                            <img alt="Feedback Analysis" className="w-20 h-20 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrM6f3v_3MYD2VwY6gbiPxhcpOnaXKjDL56Ov2jveyzMe54GhWlgew2KNW-kQ1Ws-WEKgNSWp_d2eU2LQJIhO2oBBzTp72vpPR4MlilR1OC9QExG_pAlTqLYMdH85CM1uLRg31VxXMHdUA57KNdR48fMpvXGR3gBRLXkLOB-hCP3X5QBL9_QLSK1f7GDF00XzftqBGScjLBWuiiGalBFVtq2Q86bLTXbZGE1IDF6lZj9ZrDb8adRXroWJ__8i71CXAtHBRWQlzmkp1" />
                            <div>
                                <h4 className="text-xl font-bold">Priyadarshan</h4>
                                <p className="text-primary font-medium">Associate at JP Morgan</p>
                                <div className="flex text-amber-400 mt-1">
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                    <span className="material-icons text-sm">star</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                            "I found the results to be very interesting and insightful. Your analysis provided me with a unique perspective on my personality traits that I had not previously considered. I appreciate the time and effort you put into analyzing my handwriting."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
