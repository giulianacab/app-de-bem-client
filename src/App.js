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
import { Settings } from "./pages/Settings/Settings.js";
import "./index.css";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { EditProfile } from "./pages/EditProfile/EditProfile.js";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
      </div>
      <AuthContextComponent>
        <Routes>
          <Route 
            path="/" 
            element={<ProtectedRoute component={Home} />} 
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route
            path="/editprofile"
            element={<ProtectedRoute component={EditProfile} />}
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
          <Route
            path="/settings"
            element={<ProtectedRoute component={Settings} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
