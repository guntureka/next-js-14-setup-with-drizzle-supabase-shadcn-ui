import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL!;

if (!connectionString) {
  throw new Error("No DATABASE_URL provided");
}

export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
