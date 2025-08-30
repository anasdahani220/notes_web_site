import { serial,pgTable, text, timestamp } from "drizzle-orm/pg-core";


export const notes = pgTable("notes" , {
    id: serial('id').primaryKey() ,
    userId: text('user_id').notNull(),
    text: text('text').notNull(),
    createdAt: timestamp('createdat').defaultNow().notNull() ,
    updatedAt: timestamp('updatedat').defaultNow().notNull() ,
})

export type Note = typeof notes.$inferSelect ;