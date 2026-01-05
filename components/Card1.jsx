import React from "react";
import "./Card1.css";
import Image from "next/image";

export default function Card1({img,name,details}){
    return(
        <>
        <div className="card1">
            <div className="image1">
                <Image
                    src={'/comittie/'+img}
                    alt="person image"
                    width={246}
                    height={300}
                />
            </div>
            <div className="name1">
                {name}
            </div>
            <div className="details1">
                {details}
            </div>
        </div>
        </>
    )

}