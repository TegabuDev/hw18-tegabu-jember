import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthProvider from "./context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import Admin from "./components/users/Admin";

//

function App() {
  return (
    <main>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </main>
  );
}

export default App;

// const [loggedInUser, setLoggedInUser] = useState(null);
// const [showRegister, setShowRegister] = useState(false);

// useEffect(() => {
//   const loadData = async () => {
//     const data = await userService.fetchAvatar();
//     setAvatar(data.image);
//   };
//   loadData();
// }, []);

// useEffect(() => {
//   const loggedInUser = storageService.getLoggedInUser();
//   if (loggedInUser) {
//     setLoggedInUser(loggedInUser);
//   }
// }, []);

// const handleAuth = (username, password, isRegister = false, email = "") => {
//   if (isRegister) {
//     userService.createUser(username, email, password);
//     setShowRegister(false);
//   } else {
//     const user = userService.login(username, password);
//     if (!user) {
//       alert("invalid");
//       // setShowRegister(true);
//       return;
//     }
//     setLoggedInUser(user);
//   }
// };

// const handleLogout = () => {
//   userService.logout();
//   setLoggedInUser(null);
// };
