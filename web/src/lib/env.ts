export const env = {
  API_URL: import.meta.env.VITE_API_URL || "http://localhost:3333",
} as const;
