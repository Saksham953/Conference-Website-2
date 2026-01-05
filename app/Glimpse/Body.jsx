import CustomSlider from "@/components/CustomSlider";
import Image from "next/image";
import "./Body.css";
import CardPlace from "@/components/CardPlace";

export default function Body() {
    const images = [
        '/glimpse/image1.png',
        '/glimpse/image2.png',
        '/glimpse/image3.jpg',
    ];
    return (
        <>
            <div className="container">
                <div className="body">
                    <div className="title_paper center">
                        Glimpse NMIMS Chandigarh
                    </div>
                    <CustomSlider>
                        {images.map((image, index) => {
                            return <Image key={index} src={image} alt="img" height={1920} width={1080} />;
                        })}
                    </CustomSlider>
                    <div className="title_paper center">
                        Places to visit
                    </div>

                    <div className="places">
                        <CardPlace
                            img="rose.jpg"
                            name="Rose Garden"
                            description="It’s named after India’s former President, Zakir Hussain. Thisbeautiful garden was set up in 1967.
The park is spread over 10 acres and exhibits some of rarest and exquisite varieties of rose and is home to 1600  varieties of flowers.
It serves as a venue for hosting an annual festival called festival of gardens, a major cultural event during Feb or March."
                        />

                        <CardPlace
                            img="rock.jpg"
                            name="Rock Garden"
                            description="The Rock Garden Chandigarh is a 35 acre eco-friendly garden, built solely by home waste and other Industrial items.
Sculptures are created using items such as bangles, ceramic pots, tiles, bottles and Electric waste.
Garden is a mixture of Landscape, architecture, sculpture and mythology.
NEK CHAND, founder of Rock Garden, started creating this garden secretly during his spare time in 1957.
The Layout of Garden is based on the fantasy of a Lost Kingdom. It has 14 different chambers like the forecourt.
The Teej festival, when the Rock Garden assumes a festive look, holds a special attraction for tourists."
                        />

                        <CardPlace
                            img="sukhna.jpg"
                            name="Sukhna Lake"
                            description="Sukhna Lake is a 3 sq. km rainfed lake created in 1958 by damming the Sukhna Choe, a seasonal stream coming down from Shivalik hills.
Sukhna Lake is a sanctuary for many exotic migratory birds like- Siberian Duck, Storks and Cranes during winter month.
The Lake is declared National  Wetland by Government of India.
It’s a venue for many festive celebrations like Mango festival during monsoons.
The Sukhna Lake, has longest channel for rowing and yachting events in Asia."
                        />

                        <CardPlace
                            img="complex.jpg"
                            name="Capitol Complex- The UNESCO World Heritage Site"
                            description="It’s one of the most monumental Architectural Compositions of Modern Architecture by Le Corbusier arising out of unique geo-political and cultural setting.
It has been given a status of UNESCO World Heritage.
The Capitol Complex is strategically located at Geographic and Topographic “Head” of the city against the back-drop of Shivalik Hills"
                        />

                        <CardPlace
                            img="war.jpg"
                            name="War Memorial"
                            description="“Let’s PAY TRIBUTE TO OUR SOLDIERS”
The memorial is the largest post-Independence war memorial of the country with nearly 8459 names of deceased soldiers, since 1947 from the Army Air Force and Navy.
The Place is designed to pay homage to the Jawans located in Bougainvillea garden. It was inaugurated by Late APJ Abdul Kalam in 2006. The walls of memorial are made from Pink Sandstone. It also has terrace like sitting area hence, makes a perfect place for Open Air theatre for conducting Light and Sound Show."
                        />

                        <CardPlace
                            img="sector.jpg"
                            name="Sector 17"
                            description="Also called City Centre because of its Central Location, covering an area of 240 acres. Replete with several big brands, stores, international outlets food chain and eateries.
It’s an entertainment hub, a tree-lined pedestrian plaza. E-carts have been added for the ease of visitors."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}