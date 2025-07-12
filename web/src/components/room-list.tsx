import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Link } from "react-router-dom";

import { useRooms } from "@/http/use-rooms";

import { dayjs } from "@/lib/dayjs";
import { ArrowRight } from "lucide-react";

export function RoomList() {
    const { data, isLoading } = useRooms();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Salas recentes</CardTitle>
                <CardDescription>
                    Acesso rápido para as salas criadas recentemente
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                {isLoading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                            <div className="flex flex-1 flex-col gap-1">
                                <Skeleton className="h-5 w-32" />
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-5 w-16 rounded-full" />
                                    <Skeleton className="h-5 w-8 rounded-full" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-4 w-12" />
                            </div>
                        </div>
                    ))
                ) :
                    data?.map(room => {
                        return (
                            <Link
                                key={room.id}
                                className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
                                to={`/rooms/${room.id}`}
                            >
                                <div className="flex flex-1 flex-col gap-1">
                                    <h3 className="font-medium">
                                        {room.name}
                                    </h3>

                                    <div className="flex items-center gap-2">
                                        <Badge className="text-xs" variant="secondary">
                                            {dayjs(room.createdAt).toNow()}
                                        </Badge>
                                        <Badge className="text-xs" variant="secondary">
                                            {room.questionsCount}
                                        </Badge>

                                    </div>
                                </div>

                                <span className="flex items-center gap-2">
                                    Entrar
                                    <ArrowRight className="size-3" />
                                </span>

                            </Link>
                        )
                    })
                }
            </CardContent>
        </Card>
    );
}