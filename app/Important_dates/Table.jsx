import "./Table.css";

export default function DatesTable() {
  return (
    <>
    <div className="dates-tab">
      <table className="dates-table">
        <tbody>
          <tr>
            <th colSpan="2" className="dates-th">Important dates</th>
          </tr>

          <tr>
            <td className="dates-td">Paper submission deadline:</td>
            <td className="dates-td">September 30, 2026</td>
          </tr>
          <tr>
            <td className="dates-td">Notification of acceptance:</td>
            <td className="dates-td">October 30, 2026</td>
          </tr> 
          <tr>
            <td className="dates-td">Camera-ready submission:</td>
            <td className="dates-td">November 15, 2026</td>
          </tr>
          <tr>
            <td className="dates-td last">Conference dates:</td>
            <td className="dates-td last">December 21-22, 2026</td>
          </tr>
        </tbody>
      </table> 
    </div>
    </>
  );
}
