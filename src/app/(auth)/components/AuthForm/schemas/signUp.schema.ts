'use client';

import { z } from 'zod';

export const signUpSchema = z
	.object({
		username: z
			.string()
			.min(2, { message: 'Username must contain at least 2 characters' })
			.max(50, { message: 'Username must not exceed 50 characters' }),
		email: z.string().email(),
		password: z.string().min(8, { message: 'Password must contain at least 8 character(s)' }),
		confirmPassword: z
			.string()
			.min(8, { message: 'Password must contain at least 8 character(s)' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword'],
	});
