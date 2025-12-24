import React from "react";
import "./CardPlace.css";
import Image from "next/image";

export default function CardPlace({img,name,description}) {

    return (
        <>
            <div className="CardPlace">
                <div className="image">
                    <Image src={"/place/" + img} width={1000} height={1000} alt="rose" />
                </div>

                <div className="place-name">
                    {name}
                </div>

                <div className="place-description">
                    {description}
                </div>
            </div>
        </>
    )
}