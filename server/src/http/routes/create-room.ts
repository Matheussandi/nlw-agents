import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const createRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.post("/rooms", async () => {});
};
