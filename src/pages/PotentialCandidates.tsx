import { useEffect, useState } from "react";

interface Candidate {
  login: string;
  name: string | null;
  avatar_url: string;
  email: string | null;
  company: string | null;
  location: string | null;
  html_url: string;
}

const PotentialCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // 🔹 Load candidates from local storage on component mount
  useEffect(() => {
    const storedCandidates = localStorage.getItem("savedCandidates");
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  // 🔹 Remove a candidate from the list
  const removeCandidate = (login: string) => {
    const updatedCandidates = savedCandidates.filter((c) => c.login !== login);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <main>
      <h1>Potential Candidates</h1>

      {savedCandidates.length === 0 ? (
        <p>No candidates saved yet.</p>
      ) : (
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  <img
                    src={candidate.avatar_url}
                    alt={candidate.name || "Candidate"}
                    className="candidate-avatar"
                  />
                </td>
                <td>
                  <strong>{candidate.name || "No Name Provided"}</strong>
                  <br />
                  <em>({candidate.login})</em>
                </td>
                <td>{candidate.location || "Unknown"}</td>
                <td>
                  {candidate.email ? (
                    <a href={`mailto:${candidate.email}`} className="email-link">
                      {candidate.email}
                    </a>
                  ) : "Not Available"}
                </td>
                <td>{candidate.company || "Not Available"}</td>
                <td> {/* Placeholder Bio */}
                  {candidate.login === "Ee1110"
                    ? "JavaScript obsessed. Typical coffee lover. Hardcore travel buff."
                    : candidate.login === "storkme"
                    ? "Eat Sleep Code"
                    : candidate.login === "queSaraSara"
                    ? "DevOps Guru. i <3 film"
                    : "Python all the way."}
                </td>
                <td>
                  <button
                    className="reject-btn"
                    onClick={() => removeCandidate(candidate.login)}
                  >
                    ➖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default PotentialCandidates;
