import { useRoomQuestions } from "@/http/use-room-questions";
import { QuestionItem } from "./question-item";
import { Skeleton } from "./ui/skeleton";
import { AlertCircle, Frown } from "lucide-react";

interface QuestionListProps {
    roomId: string;
}

export function QuestionList(props: QuestionListProps) {
    const { data, isPending, isError } = useRoomQuestions(props.roomId);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl text-foreground">
                    Perguntas & Respostas
                </h2>
            </div>

            {isPending && (
                <div className="space-y-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="space-y-3">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-3 w-1/2" />
                            <Skeleton className="h-16 w-full" />
                        </div>
                    ))}
                </div>
            )}

            {isError && (
                <div className="flex items-center gap-3 p-4 rounded-lg border border-destructive/20 bg-destructive/5 text-destructive">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <div>
                        <p className="font-medium">Erro ao carregar perguntas</p>
                        <p className="text-sm opacity-80">
                            Não foi possível carregar as perguntas. Tente novamente mais tarde.
                        </p>
                    </div>
                </div>
            )}

            {data && data.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Frown className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-lg font-medium text-muted-foreground mb-2">
                        Ainda não há perguntas aqui
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Seja o primeiro a fazer uma pergunta nesta sala!
                    </p>
                </div>
            )}

            {data && data.map((question) => (
                <QuestionItem
                    key={question.id}
                    question={question}
                />
            ))}
        </div>
    );
}
