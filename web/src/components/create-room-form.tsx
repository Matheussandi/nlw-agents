import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const createRoomSchema = z.object({
    name: z.string().min(3, "O nome da sala é obrigatório"),
    description: z.string().optional(),
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export function CreateRoomForm() {
    const createRoomForm = useForm<CreateRoomFormData>({
        resolver: zodResolver(createRoomSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    })

    function handleCreateRoom(data: CreateRoomFormData) {
        // Handle room creation logic here
        console.log("Room created with data:", data);
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Criar Sala</CardTitle>
                    <CardDescription>
                        Preencha os detalhes da sala para começar
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <Form {...createRoomForm}>
                        <form onSubmit={createRoomForm.handleSubmit(handleCreateRoom)} className="space-y-4">
                            <FormField
                                control={createRoomForm.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome da Sala</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Digite o nome da sala" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={createRoomForm.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Descrição (opcional)</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} placeholder="Digite uma descrição para a sala" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full cursor-pointer" >
                                Criar Sala
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
}