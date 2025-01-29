import { pgTable, varchar, serial, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const STATUS_ENUM = pgEnum('status', ['active', 'inactive']);
export const ROLE_ENUM = pgEnum('role', ['admin', 'user']);

export const users = pgTable('users', {
	userId: serial('user_id').notNull().primaryKey().unique(),
	fullName: varchar('full_name').notNull(),
	email: varchar('email').notNull().unique(),
	password: varchar('password').notNull(),
	status: STATUS_ENUM('status').notNull().default('inactive'),
	role: ROLE_ENUM('role').notNull().default('user'),
	lastActivity: timestamp('last_activity').defaultNow(),
	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});
