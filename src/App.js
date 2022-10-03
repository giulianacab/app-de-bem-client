import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.js";
import { Login } from "./pages/Login/Login.js";
import { Signup } from "./pages/Signup/Signup.js";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile/Profile.js";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

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

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
