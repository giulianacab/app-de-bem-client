import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.js";
import { Login } from "./pages/Login/Login.js";
import { Signup } from "./pages/Signup/Signup.js";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile/Profile.js";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { AllCommunities } from "./pages/AllCommunities/AllCommunities.js";
import { Community } from "./pages/Community/Community.js";
import { MyMoods } from "./pages/MyMoods/MyMoods.js";
import { CurrentMood } from "./pages/CurrentMood/CurrentMood.js";
import "./index.css";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route
            path="/communities"
            element={<ProtectedRoute component={AllCommunities} />}
          />
          <Route
            path="/communities/:idCommunity"
            element={<ProtectedRoute component={Community} />}
          />
          <Route
            path="/mymoods"
            element={<ProtectedRoute component={MyMoods} />}
          />
          <Route
            path="/currentmood"
            element={<ProtectedRoute component={CurrentMood} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
