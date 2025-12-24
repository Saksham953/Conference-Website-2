import Card from "@/components/Card";
import persons from "@/public/data/description.json";

export default function Hero() {
    const chiefGuest = persons[0]; 
    const guestofhonor= persons[1];         
    const guestofhonor1= persons[2];         
    const guestofhonor2= persons[3];         
    const keynoteSpeakers = persons.slice(4); 

    return (
        <div className="container">
            <div className="body">

                {/* Chief Guest */}
                <div className="title_paper">
                    Chief Guest
                </div>

                {chiefGuest && (
                    <Card person={guestofhonor} />
                )}

                   <div className="title_paper">
                    Guest of Honor
                </div>


                  {chiefGuest && (
                    <Card person={guestofhonor1} />
                )}
                  {chiefGuest && (
                    <Card person={guestofhonor2} />
                )}

                {/* Keynote Speakers */}
                <div className="title_paper">
                    Keynote Speakers
                </div>

                {keynoteSpeakers.map((person, index) => (
                    <div key={index}>
                        <Card person={person} />
                    </div>
                ))}

            </div>
        </div>
    );
}
