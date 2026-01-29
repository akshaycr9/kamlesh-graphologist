import mainImage from '../assets/images/main-image.jpg';

const About = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative w-full max-w-md lg:max-w-none mx-auto">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                            <img alt="Kamlesh Gidwani Professional Portrait" className="w-full h-full object-cover object-top" src={mainImage} />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl text-white shadow-xl max-w-xs">
                            <p className="text-sm italic opacity-90 mb-2">"Graphology is the gateway to understanding your core beliefs and hidden strengths."</p>
                            <p className="font-bold text-lg">— Kamlesh Gidwani</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold mb-6">Kamlesh Gidwani</h2>
                        <h3 className="text-xl text-primary font-semibold mb-8">Member of International Council of Graphologists</h3>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
                            <p>While writing this, I have embarked on a journey into this wonderful science of Handwriting Analysis and Grapho-Therapy. This science has helped me in understanding my strengths, weaknesses, and core beliefs.</p>
                            <div className="bg-secondary/10 border-l-4 border-secondary p-6 my-8">
                                <p className="text-slate-900 dark:text-slate-100 font-medium">"I have been able to acknowledge and influence a change in my attitude toward many things for my betterment and am seeing major changes in my life."</p>
                            </div>
                            <p>I am on a mission to make <span className="text-primary font-bold">one hundred thousand</span> people better their lives by empowering them with the knowledge of the power of handwriting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
