# TalentTrove
 
Live Demo:https://talenttrove-ytdh.onrender.com/



🚀 A modern **Candidate Finder** web application that allows users to **search for developers** and **save their GitHub profiles** for easy reference. Built using **React and TypeScript**, this application integrates with the GitHub API to fetch developer information dynamically.

---

## **Features**  
✅ Search for candidates by **GitHub username**  
✅ View detailed **GitHub profiles** including repositories and followers  
✅ Save favorite candidates for **quick access**  
✅ Responsive and user-friendly UI  
✅ Uses **local storage or backend API** to persist saved profiles  

---

## **Tech Stack**  
- **React** – Frontend framework  
- **TypeScript** – Type-safe JavaScript  
- **Vite** – Fast development tooling   
- **GitHub API** – Fetch developer data  

---

## **Installation & Setup**  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/candidate-finder.git
   cd HireHub
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory**  
   ```sh
   VITE_GITHUB_API_URL=https://api.github.com
   VITE_GITHUB_ACCESS_TOKEN=your_personal_access_token
   ```

4. **Start the development server**  
   ```sh
   npm run dev
   ```

---

## **Usage**  
1. Enter a **GitHub username** in the search bar.  
2. View candidate **profile details, repositories, and followers**.  
3. Click **"Save Profile"** to bookmark a candidate.  
4. Access saved candidates anytime from the **Saved Profiles** page.  

---

## **Project Structure**
/src
 ├── /components
 │   ├── Nav.tsx
 ├── /pages
 │   ├── CandidateSearch.tsx
 │   ├── PotentialCandidates.tsx
 ├── /api
 │   ├── API.tsx
 ├── App.tsx
 ├── index.tsx
 ├── styles.css
 ├── README.md

---

## **API Integration**  
This app fetches candidate data from the **GitHub API**. Example:  
```ts
const API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchCandidate = async (username: string) => {
  const response = await axios.get(`${API_URL}/users/${username}`);
  return response.data;
};
```

---

## **Contributing**  
1. **Fork** the repository  
2. **Create** a new branch (`git checkout -b feature-branch`)  
3. **Commit** your changes (`git commit -m "Add new feature"`)  
4. **Push** to the branch (`git push origin feature-branch`)  
5. **Open a Pull Request**  

---

## **License**  
📜 This project is **open-source** under the **MIT License**.  

![alt text](<Screenshot 2025-02-11 190832.png>)
---