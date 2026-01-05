"use client"
import React from "react";
import Button from "@/components/Button";

export default function Hero() {
    return (
        <div className="container">
            <div className="body">
                <div className="title_paper">
                    Submission Guidelines
                </div>
                <div className="content">
                    <ul>
                        <li className="space">All papers must be original and not simultaneously submitted to another journals or
                            conferences</li>
                        <li className="space">The paper can be a full-length paper (10-12), short paper (6-9), but Authors are
                            encouraged to submit papers that are 10-12 pages long, including references.</li>
                        <li className="space">All Submissions should be formatted according to the IICTDS 2025 submission
                            guidelines. These guidelines including font, spacing, and citation style are available on
                            the conference website.</li>
                        <li className="space">Papers must be submitted in word/PDF format via the conference submission system.</li>
                        <li className="space">The language of the conference and all submissions is English.</li>
                    </ul>
                    <Button />
                </div>

                <div className="title_paper">
                    Review Process
                </div>
                <div className="content">
                    All submitted papers will undergo a peer-review process by a committee of experts in the field. Accepted papers will be included in the EAI conference proceeding series. Authors will receive feedback and notification of paper acceptance by November 15,
                    2025.
                </div>

                <div className="title_paper">
                    Final Paper Submission
                </div>
                <div className="content">
                    Authors must submit the final version of their papers, incorporating feedback received
                    during the review process, by  November 30, 2025.
                </div>

                <div className="title_paper">
                    CMT Acknowledgment
                </div>
                <div className="content">
                    "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."
                </div>
            </div>
        </div>
    )
}