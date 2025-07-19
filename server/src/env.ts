import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith("postgres://"),
  AI_API_KEY: z.string().min(1, "AI_API_KEY is required"),
});

export const env = envSchema.parse(process.env);
