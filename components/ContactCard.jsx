import "./ContactCard.css";
import Image from "next/image";

export default function ContactCard(props) {
    return (
        <div className="head">
            <Image className="image" src={props.image} width={150} height={170} alt="image" />
            <div className="name">{props.name}</div>
            <div className="description">{props.description}</div>
            <div className="mail">{props.email}</div>
        </div>
    )
}