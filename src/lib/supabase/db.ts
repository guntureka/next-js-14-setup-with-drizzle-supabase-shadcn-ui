import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/lib/supabase/schema";
import * as dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.DATABASE_URL!;

if (!connectionString) {
  console.log("No DATABASE_URL provided");
}

export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });

export default db;
