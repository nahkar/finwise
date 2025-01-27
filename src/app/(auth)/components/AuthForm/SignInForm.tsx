'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { signInSchema } from './schemas/signIn.schema';
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
import Image from 'next/image';

import { Input } from '@/components/ui/input';
import eyeIcon from './img/eye.svg';
import { useState } from 'react';
import { cn } from '@/lib/utils';
export const SignInForm = () => {
	const form: UseFormReturn<z.infer<typeof signInSchema>> = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof signInSchema>) => {
		console.log(values);
	};

	const [isShowPassword, setIsShowPassword] = useState(false);

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
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<div className="relative">
										<Input
											placeholder="password"
											{...field}
											className="pr-8"
											type={isShowPassword ? 'text' : 'password'}
										/>
										<Image
											src={eyeIcon}
											alt="eye"
											className={cn(
												'absolute right-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer',
												isShowPassword ? 'rotate-180' : 'rotate-0',
											)}
											onClick={() => setIsShowPassword(!isShowPassword)}
										/>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="h-10 w-full bg-customGreen text-white" type="submit">
						Sign In
					</Button>
				</form>
			</Form>
		</div>
	);
};
