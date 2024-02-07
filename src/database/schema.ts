import { pgTable, serial, text, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("email", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

export type Users = typeof users.$inferSelect;
