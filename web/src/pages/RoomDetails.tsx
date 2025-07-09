import { useParams, Navigate } from "react-router-dom";

type RoomParams = {
    roomId: string;
}

export function RoomDetails() {
    const params = useParams<RoomParams>();

    if (!params.roomId) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Room Details</h1>
            <p>
                Room ID: {params.roomId}
            </p>
        </>
    );
}