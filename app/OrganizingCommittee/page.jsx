import "./page.css";

export default function OrganizingCommittee() {
  return (
    <div className="container">
      <div className="body">

        {/* PAGE TITLE */}
        <div className="title_paper center">Organizing Committee</div>

        {/* STUDENT COORDINATORS */}
        <div className="oc-section-title">Student Coordinators</div>
        <table className="oc-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Lead Name</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Department">IT Support & Technical Department</td>
              <td data-label="Lead Name">Saksham Tripathi & Agamjot Singh Monga</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 8953417949</div>
                <div><strong>Email:</strong> saksham.tripathi047@nmims.in</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Publication Committee</td>
              <td data-label="Lead Name">Bhavya Jha</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 7657872928</div>
                <div><strong>Email:</strong> jha.bhavya025@nmims.in</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Hospitality & Transport Committee</td>
              <td data-label="Lead Name">Aryamann Ailawadi</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 6283513186</div>
                <div><strong>Email:</strong> ailawadi.aryamann020@nmims.in</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Publicity Committee</td>
              <td data-label="Lead Name">Neha Sachdeva</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 6283325133</div>
                <div><strong>Email:</strong> sachdeva.neha039@nmims.in</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Event & Stage Management Committee</td>
              <td data-label="Lead Name">Bhavya Jha & Neha Sachdeva</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 7657872928</div>
                <div><strong>Email:</strong> jha.bhavya025@nmims.in</div>
                <div><strong>Phone:</strong> 6283325133</div>
                <div><strong>Email:</strong> sachdeva.neha039@nmims.in</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Discipline & Audience Management Committee</td>
              <td data-label="Lead Name">Neha Sachdeva</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 6283325133</div>
                <div><strong>Email:</strong> sachdeva.neha039@nmims.in</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Registration Committee</td>
              <td data-label="Lead Name">Aryamann Ailawadi</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 6283513186</div>
                <div><strong>Email:</strong> ailawadi.aryamann020@nmims.in</div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* FACULTY COORDINATORS */}
        <div className="oc-section-title">Faculty Coordinators</div>
        <table className="oc-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Name</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Department">Publication Committee</td>
              <td data-label="Name">Dr. Preetjot Kaur</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 01723501300</div>
                <div><strong>Email:</strong> preetjot.kaur@nmims.edu</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Hospitality & Transport Committee</td>
              <td data-label="Name">Dr. Ranvir Singh</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 01723501300</div>
                <div><strong>Email:</strong> ranvir.panwar@nmims.edu</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Publicity Committee</td>
              <td data-label="Name">Dr. Aditya</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 01723501300</div>
                <div><strong>Email:</strong> aditya.bakshi@nmims.edu</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Event & Stage Management Committee</td>
              <td data-label="Name">Dr. Aastha Gupta</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 01723501300</div>
                <div><strong>Email:</strong> aastha.gupta@nmims.edu</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Discipline & Audience Management Committee</td>
              <td data-label="Name">Mr. Pankaj Gullane</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 01723501300</div>
                <div><strong>Email:</strong> pankaj.gulhane@nmims.edu</div>
              </td>
            </tr>

            <tr>
              <td data-label="Department">Registration Committee</td>
              <td data-label="Name">Mr. Ashish Mogra</td>
              <td data-label="Contact">
                <div><strong>Phone:</strong> 01723501300</div>
                <div><strong>Email:</strong> ashish.mogra@nmims.edu</div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}