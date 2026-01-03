import React from "react";
import "./page.css"
import Card1 from "@/components/Card1";

export default function ProgramCommittee({ props }) {
    return (
        <>
            <div className="container">
                <div className="body">
                    <div className="title_paper center">
                        CHIEF PATRONS
                    </div>
                    <div className="cards">
                        <Card1
                            img='chancellor.png'
                            name='Shri Amrishbhai R. Patel'
                            details="Chancellor, SVKM's NMIMS & President, SVKM"
                        />
                        <Card1
                            img='vc.jpg'
                            name='Dr. Ramesh Bhat'
                            details="Vice Chancellor, SVKM’s NMIMS"
                        />
                    </div>

                    <div className="title_paper center">
                        PATRONS
                    </div>

                    <div className="cards">
                        <Card1
                            img='provc.jpg'
                            name='Dr. Sharad Mhaiskar'
                            details="PRO VICE CHANCELLOR"
                        />
                        <Card1
                            img='provc2.png'
                            name='Dr. Meena Chintamaneni'
                            details="PRO VICE CHANCELLOR"
                        />
                        <Card1
                            img='provc3.png'
                            name='Dr. Abhishek Ranjan'
                            details='Pro Vice Chancellor'
                        />
                    </div>

                    <div className="title_paper center">
                        Conference Principal Chair
                    </div>

                    <div className="cards">
                        <Card1
                            img='deanSTME.jpeg'
                            name='Prof. (Dr.)Koteswararao Anne'
                            details="Dean MPSTME, SVKM's NMIMS"
                        />
                        <Card1
                            img='dean.jpg'
                            name='Dr Jyotsna Singh'
                            details='Director (I/C) & Associate Dean, STME'
                        />
                    </div>

                    <div className="title_paper center">
                        Conference General Chair
                    </div>

                    <div className="cards">
                        <Card1
                            img='chair1.jpg'
                            name='Dr. Yugal Kumar'
                            details='Associate Professor Computer Engineering, STME'
                        />

                        <Card1  
                            img='chair2.jpg'
                            name='Dr. Jagpreet'
                            details='Associate Professor Computer Engineering/ STME'
                        />
                    </div>

                </div>

            </div>
        </>
    )
}