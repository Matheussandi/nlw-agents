import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateQuestionResponse } from "./types/create-question-response";
import { env } from "../lib/env";
import type { CreateQuestionRequest } from "./types/create-question-request";

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-question"],
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(`${env.API_URL}/rooms/${roomId}/questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create question");
      }

      const result: CreateQuestionResponse = await response.json();

      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-questions", roomId],
      });
    },
  });
}
