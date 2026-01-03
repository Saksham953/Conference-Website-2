import Link from "next/link";
import Table from "./Table";

export default function Hero() {
    return (
        <div className="container">
            <div className="body">
                <div className="title_paper">
                    Registration
                </div>

                <div className="content">
                    <ul>
                        <li className="space">
                            All attendees, including authors and non-presenting participants, are required to register
                            for the conference
                        </li>
                        <li className="space">
                            Regular registration open until December 10, 2025.
                        </li>
                    </ul>
                </div>


                <div>
                    <Table />
                </div>


                <div className="title_paper">
                    Online Payment Link
                </div>
                <div className="content">
                    <div className="payment-link-container">
                        <Link 
                            href="" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="payment-link"
                        >
                            Click here to make payment
                        </Link>
                    </div>
                </div>

                <div style={{ marginTop: "20px" }}><h2
    style={{
      fontSize: "30px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "red",
    }}
  >
    Important Notice
  </h2>

  <p style={{ color: "black", marginBottom: "16px", fontSize:"18px" }}>
    It is <strong>mandatory</strong> for all registered users to fill out this confirmation form. Your response is required
    to finalize your participation.
  </p>

  <a
    href="https://forms.gle/NLHFDJPx787oQR7N6"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#d32f2f",
      color: "white",
      padding: "10px 18px",
      borderRadius: "8px",
      textDecoration: "none",
    }}
  >
    Fill the Google Form
  </a>
</div>


                <div className="sub-heading">
                    Authors refer to the following points for registration:
                </div>
                <div className="content">
                    <ul>
                        <li className="space">
                            Write Paper ID in place of Student Sap No.
                        </li>
                        <li className="space">
                            Write event name (IICTDS2025) in place of Program Name.
                        </li>
                        <li className="space">
                            Select from drop-down list of Purpose of payment (Conference Registration).
                        </li>
                        <li className="space">
                            QR CODE option is available under UPI OPTION.
                        </li>
                    </ul>
                </div>

                <div className="title_paper">
                    Note
                </div>
                <div className="content">
                    For the most accurate and up-to-date information, participants should refer to the official
                    conference website and communication channels for any updates or changes to the submission
                    guidelines.
                </div>
            </div>
        </div>
    );
}
