import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";

interface Candidate {
  login: string;
  name: string | null;
  avatar_url: string;
  email: string | null;
  company: string | null;
  location: string | null;
  html_url: string;
}

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [__savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    loadCandidate();
    loadSavedCandidates();
  }, []);

  /** 🔹 Fetch and load a valid candidate */
  const loadCandidate = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("🔍 Fetching candidate list...");
      const users = await searchGithub();

      for (const user of users) {
        console.log("📌 Fetching details for:", user.login);
        const userDetails = await searchGithubUser(user.login);

        if (userDetails) {
          console.log("✅ Candidate data received:", userDetails);
          setCandidate(userDetails);
          return; // ✅ Stop searching once a valid candidate is found
        }
      }

      console.warn("⚠️ No valid candidates found.");
      setCandidate(null);
    } catch (err) {
      setError("❌ Failed to load candidate. Please try again.");
      console.error("⚠️ Error fetching candidate:", err);
    } finally {
      setLoading(false);
    }
  };

  /** 🔹 Load saved candidates from local storage */
  const loadSavedCandidates = () => {
    const storedCandidates = localStorage.getItem("savedCandidates");
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  };

  /** 🔹 Save candidate to local storage */
  const saveCandidate = () => {
    if (candidate) {
      try {
        const storedCandidates: Candidate[] = JSON.parse(localStorage.getItem("savedCandidates") || "[]");

        // ✅ Prevent Duplicate Entries
        if (!storedCandidates.some((c) => c.login === candidate.login)) {
          const updatedCandidates = [...storedCandidates, candidate];
          localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));

          setSavedCandidates(updatedCandidates); // ✅ Update state
          console.log("✅ Candidate saved:", candidate);
          loadCandidate(); // ✅ Load the next candidate immediately
        } else {
          console.warn("⚠️ Candidate already saved:", candidate.login);
        }
      } catch (err) {
        console.error("❌ Error saving candidate:", err);
      }
    }
  };

  return (
    <main>
      <h1>Candidate Search</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      ) : candidate ? (
        <div className="card">
          <img
            src={candidate.avatar_url}
            alt={candidate.name || "Candidate"}
            className="candidate-avatar"
          />
          <h2>{candidate.name || "No Name Available"} <em>({candidate.login})</em></h2>
          <p><strong>Location:</strong> {candidate.location || "Not available"}</p>
          <p><strong>Company:</strong> {candidate.company || "Not available"}</p>
          <p><strong>Email:</strong>
            {candidate.email ? (
              <a href={`mailto:${candidate.email}`} style={{ color: "#00aaff" }}>
                {candidate.email}
              </a>
            ) : "Not available"}
          </p>
          <p>
            <strong>Profile:</strong>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer" style={{ color: "#00aaff" }}>
              GitHub Profile
            </a>
          </p>

          <div className="button-container">
            <button className="reject-btn" onClick={loadCandidate}>−</button>
            <button className="accept-btn" onClick={saveCandidate}>+</button>
          </div>
        </div>
      ) : (
        <p>No candidates available.</p>
      )}
    </main>
  );
};

export default CandidateSearch;
