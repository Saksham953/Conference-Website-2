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
            <td className="dates-td"><s>November 5, 2025</s> &nbsp;&nbsp;November 30, 2025  </td>
          </tr>
          <tr>
            <td className="dates-td">Notification of acceptance:</td>
            <td className="dates-td"><s>November 15, 2025 </s>&nbsp;&nbsp;<s>November 30, 2025</s> &nbsp; December 6, 2025</td>
          </tr> 
          <tr>
            <td className="dates-td">Camera-ready submission:</td>
            <td className="dates-td"><s>November 30, 2025</s>&nbsp; December 10, 2025</td>
          </tr>
          <tr>
            <td className="dates-td last">Conference dates:</td>
            <td className="dates-td last">December 19 -20, 2025</td>
          </tr>
        </tbody>
      </table> 
    </div>
    </>
  );
}
