import Image from "next/image";
import "./Card.css";

export default function Card({ person }) {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        {/* Image Section */}
        <div className="speaker-image">
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(max-width: 900px) 220px, 260px"
            className="person_image"
          />
        </div>

        {/* Info Section */}
        <div className="person_info">
          <div className="person_name">{person.name}</div>
          <div className="person_description">{person.description}</div>
        </div>
      </div>
    </div>
  );
}