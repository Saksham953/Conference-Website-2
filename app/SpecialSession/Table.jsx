import sessions from "@/public/data/session.json";
import Link from "next/link";
import "./Table.css"; 

export default function ConferenceTable() {
  return (
    <div className="session-wrapper">
      <table className="session-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Session ID</th>
            <th>Details of Special Session</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.sno}>
              <td>{session.sno}</td>
              <td>
                <strong>{session.sessionId}</strong>
              </td>
              <td>
                <div className="session-details">
                  <table className="session-inner">
                    <tbody>
                      <tr>
                        <td className="session-label">Topic</td>
                        <td className="session-value">
                          <Link href="#" className="session-link">
                            {session.topic}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="session-label">Session Chairperson</td>
                        <td className="session-value">
                          {session.profile ? (
                            <Link
                              href={session.profile}
                              className="session-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {session.chairperson}
                            </Link>
                          ) : (
                            session.chairperson
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="session-label">Co Chairs</td>
                        <td className="session-value">
                          {session.coChairs || "-"}
                        </td>
                      </tr>
                      <tr>
                        <td className="session-label">Organization</td>
                        <td className="session-value">
                          {Array.isArray(session.organization) ? (
                            <ul className="session-list">
                              {session.organization.map((org, index) => (
                                <li key={index} className="session-list-item">
                                  {org}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            session.organization
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="session-label">e-Mail</td>
                        <td className="session-value">
                          {Array.isArray(session.email) ? (
                            <ul className="session-list">
                              {session.email.map((email, index) => (
                                <li key={index} className="session-list-item">
                                  <Link
                                    href={`mailto:${email}`}
                                    className="session-link"
                                  >
                                    {email}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <Link
                              href={`mailto:${session.email}`}
                              className="session-link"
                            >
                              {session.email}
                            </Link>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
