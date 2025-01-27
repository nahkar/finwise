'use client';

import { z } from 'zod';

export const securityPinSchema = z.object({
	pin1: z.number().min(0).max(9).or(z.literal('—')),
	pin2: z.number().min(0).max(9).or(z.literal('—')),
	pin3: z.number().min(0).max(9).or(z.literal('—')),
	pin4: z.number().min(0).max(9).or(z.literal('—')),
	pin5: z.number().min(0).max(9).or(z.literal('—')),
	pin6: z.number().min(0).max(9).or(z.literal('—')),
});
