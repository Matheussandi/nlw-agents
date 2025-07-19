import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { rooms } from "./schema/rooms.ts";
import { questions } from "./schema/questions.ts";

// Criamos um schema sem a tabela audioChunks para evitar o erro com o tipo vector
const seedSchema = {
  rooms,
  questions,
};

await reset(db, seedSchema);

await seed(db, seedSchema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    questions: {
      count: 5,
    },
  };
});

await sql.end();

console.log("Database seeded successfully!");
