/** @format */
import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email({ message: 'Invalid email address.' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long.' })
		.regex(/[a-zA-Z]/, {
			message: 'Password must contain at least one letter.'
		})
		.regex(/[0-9]/, {
			message: 'Password must contain at least one number.'
		})
		.regex(/[^a-zA-Z0-9]/, {
			message: 'Password must contain at least one special character.'
		})
});
