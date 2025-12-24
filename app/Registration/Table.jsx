import "./Table.css";

export default function Table() {
  return (
    <div className="conference-tab">
      <table className="conference-table">
        <tbody>
          <tr>
            <th colSpan="2" className="conference-th">Amount Per Category</th>
          </tr>

          <tr>
            <td className="conference-td">Student/Scholar</td>
            <td className="conference-td">&#8377;6000/-</td>
          </tr>
          <tr>
            <td className="conference-td">Faculty/Academician</td>
            <td className="conference-td">&#8377;7000/-</td>
          </tr>
          <tr>
            <td className="conference-td">Industry</td>
            <td className="conference-td">&#8377;8000/-</td>
          </tr>
          <tr>
            <td className="conference-td">Foreign Delegates</td>
            <td className="conference-td">$120/-</td>
          </tr>
          <tr>
            <td className="conference-td">Attendee Only</td>
            <td className="conference-td">&#8377;3000/-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
