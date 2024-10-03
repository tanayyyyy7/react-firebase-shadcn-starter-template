import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/AuthContext";
import UserAuth from "./components/UserAuth";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAuth />} /> 
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
