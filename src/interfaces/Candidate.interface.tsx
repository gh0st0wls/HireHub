interface Candidate {
    login: string;       // GitHub username
    name: string | null; // Full name (can be null)
    avatar_url: string;  // Profile picture URL
    email: string | null; // Email (can be null)
    company: string | null; // Company name (can be null)
    location: string | null; // Location (can be null)
    html_url: string;    // GitHub profile URL
  }
  