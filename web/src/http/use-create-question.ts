import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateQuestionResponse } from "./types/create-question-response";
import { env } from "../lib/env";
import type { CreateQuestionRequest } from "./types/create-question-request";
import type { GetRoomQuestionsResponse } from "./types/get-room-questions-response";

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

    onMutate({ question }) {
      const questions =
        queryClient.getQueryData<GetRoomQuestionsResponse>([
          "get-questions",
          roomId,
        ]) || [];

      const questionsArray = questions ?? [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      };

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ["get-questions", roomId],
        [newQuestion, ...questionsArray]
      );

      return { newQuestion, questions };
    },

    onSuccess(data, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ["get-questions", roomId],
          (questions) => {
            if (!questions) {
              return questions;
            }

            if (!context.newQuestion) {
              return questions;
            }

            return questions.map((question) => {
              if (question.id === context.newQuestion.id) {
                return {
                  ...question,
                  id: data.questionId,
                  answer: data.answer,
                  isGeneratingAnswer: false,
                };
              }

              return question;
            });
          }
        );
      }
    },

    onError: (_error, _variables, context) => {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ["get-questions", roomId],
          context.questions
        );
      }
    },

    /*     onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-questions", roomId],
      });
    }, */
  });
}
