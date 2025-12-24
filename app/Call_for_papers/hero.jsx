import CommonButton from "@/components/CommonButton"
export default function Hero() {

    return (
        <>
        <div className="container">
            <div className="body">
                <div className="title_paper">
                    Call For Papers
                </div>
                <div className="content">
                    We invite researchers and practitioners to submit their original research papers on the following themes: AI, ML, DS methodologies, real-world applications, case studies, and interdisciplinary research.
                </div>
            </div>
        </div>

        <div className="container">
                <div className="body">
                    <div className="title_paper">
                        Tracks
                    </div>
                    <div>
                        <CommonButton variant="primary" size="medium" href="/SpecialSession" >
                            Special Tracks
                        </CommonButton>
                    </div>
                    <div className="content">
                        <div className="sub-heading">
                            Track 1: Artificial Intelligence
                        </div>
                        <ul>
                            <li className="space">Explainable AI and interpretability</li>
                            <li className="space">AI in robotics, IoT, and smart devices</li>
                            <li className="space">Cognitive computing and AI ethics</li>
                            <li className="space">Natural language processing and understanding</li>
                            <li className="space">AI for healthcare, sustainability, and climate science</li>
                        </ul>
                    </div>

                    <div className="content">
                        <div className="sub-heading">Track 2: Machine Learning</div>
                        <ul>
                            <li className="space">Deep learning, reinforcement learning, and transfer learning</li>
                            <li className="space">Advances in supervised, unsupervised, and semi-supervised learning</li>
                            <li className="space">ML for cybersecurity, privacy, and anomaly detection</li>
                            <li className="space">Generative models and synthetic data generation</li>
                            <li className="space">ML in autonomous systems, transport, and robotics</li>
                        </ul>
                    </div>

                    <div className="content">
                        <div className="sub-heading">Track 3: Data Science</div>
                        <ul>
                            <li className="space">Big data analytics, architecture, and infrastructure</li>
                            <li className="space">Data wrangling, pre-processing, and feature engineering</li>
                            <li className="space">Scalable algorithms for large datasets</li>
                            <li className="space">Predictive and prescriptive analytics</li>
                            <li className="space">Visualization techniques and tools for data interpretation</li>
                        </ul>
                    </div>


                    <div className="content">
                        <div className="sub-heading">Track 4: Interdisciplinary Applications</div>
                        <ul>
                            <li className="space">AI, ML, and DS for personalized medicine and genomics</li>
                            <li className="space">AI, ML, and DS for Wireless Networks</li>
                            <li className="space">AI, ML and DS for IoT, IoMT and IIoT</li>
                            <li className="space">AI for constrained and unconstrained optimization problems</li>
                            <li className="space">AI in the finance and banking industry</li>
                            <li className="space">AI-driven innovations in education and e-learning</li>
                            <li className="space">AI applications in smart cities and transportation</li>

                        </ul>
                    </div>
                </div>
            </div>
        

        </>
    )
}