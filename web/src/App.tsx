import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/CreateRoom";
import { RoomDetails } from "./pages/RoomDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateRoom />} index />
        <Route path="/room" element={<RoomDetails />} />
      </Routes>
    </BrowserRouter>
  )
}