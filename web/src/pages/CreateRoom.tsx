import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsResponse = {
    id: string;
    name: string;
}[];

export function CreateRoom() {
    const { data, isLoading } = useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3333/rooms')
            const result: GetRoomsResponse = await response.json();

            return result;
        },
    });

    return (
        <>
            {isLoading && <p>Loading...</p>}
            <div className="flex flex-col items-center justify-center min-h-screen">
                {data?.map((room) => (
                    <Link
                        key={room.id}
                        to={`/room/${room.id}`}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block mb-2"
                    >
                        {room.name}
                    </Link>
                ))}
            </div>
        </>
    )
}