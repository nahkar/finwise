'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { forgotPasswordSchema } from './schemas/forgotPassword.schema';
import { redirect } from 'next/navigation';

export const ForgotPasswordForm = () => {
	const form: UseFormReturn<z.infer<typeof forgotPasswordSchema>> = useForm<
		z.infer<typeof forgotPasswordSchema>
	>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
		console.log(values);
		redirect('/forgot-password-confirm');
	};

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="emailexample@example.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="h-10 w-full bg-customGreen text-white" type="submit">
						Next Step
					</Button>
				</form>
			</Form>
		</div>
	);
};
