import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "../src/pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import EventosPage from "./pages/EventosPage";
import TeamPages from "./pages/TeamPages";
import { AuthProvider } from "./context/AuthContext";
import TestimoniosPage from "./pages/TestimoniosPage";
import SomosDynamosPage from "./pages/SomosDynamosPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter  basename="dynamos-movimiento">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<h1>Tasks Page</h1>} />
          <Route path="/add-task" element={<h1>New Task</h1>} />
          <Route path="/tasks/:id" element={<h1>Update Task</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />

          <Route path="/somos-dynamos" element={<SomosDynamosPage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/testimonios" element={<TestimoniosPage />} />
          <Route path="/team" element={<TeamPages />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
