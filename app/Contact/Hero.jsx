import ContactCard from "@/components/ContactCard"
import "./Hero.css"

export default function Hero() {
    return (
        <>
            <div className="container">
                <div className="body">
                    <div className="title_paper">
                        Contact Us
                    </div>

                    <div className="Cards">
                        <ContactCard
                            name="Dr. Jagpreet"
                            description="Associate Professor in 
                            Computer Engineering/ STME,
                            Conference General Chair"
                            email="jagpreet@nmims.edu"
                            image="/comittie/chair2.jpg"
                        />

                        <ContactCard
                            name="Dr.Yugal Kumar"
                            description="Associate Professor in 
                            Computer Engineering/ STME,
                            Conference General Chair"
                            email="yugal.kumar@nmims.edu"
                            image="/comittie/chair1.jpg"
                        />
                    </div>
                    <div className="responsive-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.6919473393227!2d76.75907537558238!3d30.78322427455997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff36a1f4cad33%3A0xe4173a616a6ece1a!2sNarsee%20Monjee%20Institute%20of%20Management%20Studies%20(NMIMS)%20Chandigarh!5e0!3m2!1sen!2sin!4v1727724016777!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}