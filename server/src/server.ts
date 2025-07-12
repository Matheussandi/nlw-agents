import { fastify } from "fastify";

import { fastifyCors } from "@fastify/cors";

import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { createRoomRoute } from "./http/routes/create-room.ts";
import { getRoomQuestionsRoute } from "./http/routes/get-room-questions.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";

import { env } from "./env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/health", () => {
  return "OK";
});

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomQuestionsRoute);
app.register(createQuestionRoute);

app
  .listen({ port: env.PORT })
  .then(() => {
    console.log(`Server is running on port ${env.PORT}`);
  })
  .catch((err) => {
    console.error("Error starting server:", err);
    process.exit(1);
  });
