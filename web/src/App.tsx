import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Room />} index />
          <Route element={<CreateRoom />} path="/create-room" />
          <Route element={<Room />} path="/room/:roomId" />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  )
}