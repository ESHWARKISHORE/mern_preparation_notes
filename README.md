# MERN Preparation Notes

This repo contains notes and code samples prepared for MERN Stack development and interview readiness, including DSA and performance optimization.

---

## 📅 Day 0 – 26 June 2025 Thursday

### ✅ Setup & Planning
- Folder structure created for DSA, React Redux, and common components
- GitHub repo initialized and committed

### ✅ React + Redux Toolkit
- userSlice created under `/features/user/` with `addUser` and `clearUser` reducers
- Redux store configured and connected to the app
- `UserAdding.jsx` implemented with controlled inputs and dispatch to Redux
- `DisplayingUser.jsx` built to display users using Redux `useSelector`
- `ReusableTable.jsx` created for dynamic column table rendering using `Object.keys()`

### ✅ DSA Progress
- Solved DSA Problem #12: String Reversal (in-place)
- Added 11 previously solved problems into the `/DSA` folder
- All committed to GitHub

---


## 📅 Day 1 – 27 June 2025 Friday

### ✅ React + Redux Toolkit
- Created `userAPI.js` with `createAsyncThunk` to fetch users from JSONPlaceholder
- Added `userFromAPISlice.js` to handle API data with `extraReducers`
- Integrated API flow with `ReusableTable.jsx` to display fetched users dynamically
- Verified loading, fulfilled, rejected states handled correctly

### ✅ DSA Progress
- Solved DSA Problem #13: LeetCode 121 – Find Maximum Profit from Stock
- Committed to `/DSA` folder with proper problem number and tested output

### ✅ Notes
- Documented the purpose of `createAsyncThunk` and `extraReducers` usage under `react-redux/Day1`
- Clarified difference between `reducers` vs `extraReducers` for async flows

---

More updates will follow daily as I continue through the 30-day MERN + DSA prep journey.