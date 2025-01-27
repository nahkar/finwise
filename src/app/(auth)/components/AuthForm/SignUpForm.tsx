'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { signUpSchema } from './schemas/signUp.schema';
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
import Link from 'next/link';
export const SignUpForm = () => {
	const form: UseFormReturn<z.infer<typeof signUpSchema>> = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
		console.log(values);
	};

	const [isShowPassword, setIsShowPassword] = useState(false);

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<Input placeholder="Your Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
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
					<div className="text-center mt-5">
						<p>By continuing, you agree to</p>
						<p>
							<Link className="font-semibold hover:underline" href={'/terms-of-use'}>
								Terms of Use
							</Link>{' '}
							and{' '}
							<Link className="font-semibold hover:underline" href={'/privacy-policy'}>
								Privacy Policy
							</Link>
						</p>
					</div>
					<Button className="h-10 w-full bg-customGreen text-white" type="submit">
						Sign Up
					</Button>
				</form>
			</Form>
		</div>
	);
};
