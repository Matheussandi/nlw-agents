import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CreateRoom } from "./pages/CreateRoom";
import { RoomDetails } from "./pages/RoomDetails";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<RoomDetails />} path="/room/:roomId" />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  )
}