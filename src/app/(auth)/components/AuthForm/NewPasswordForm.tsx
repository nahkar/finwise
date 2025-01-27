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
import Image from 'next/image';

import { Input } from '@/components/ui/input';
import eyeIcon from './img/eye.svg';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { newPasswordSchema } from './schemas/newPassword.schema';
export const NewPasswordForm = () => {
	const form: UseFormReturn<z.infer<typeof newPasswordSchema>> = useForm<
		z.infer<typeof newPasswordSchema>
	>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof newPasswordSchema>) => {
		console.log(values);
	};

	const [isShowPassword, setIsShowPassword] = useState(false);

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
					<Button className="h-10 w-full bg-customGreen text-white" type="submit">
						Change Password
					</Button>
				</form>
			</Form>
		</div>
	);
};
