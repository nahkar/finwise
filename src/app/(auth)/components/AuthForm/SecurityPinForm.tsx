'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { securityPinSchema } from './schemas/securityPin.schema';
import { ChangeEvent, useRef } from 'react';
import { redirect } from 'next/navigation';

type PinFields = 'pin1' | 'pin2' | 'pin3' | 'pin4' | 'pin5' | 'pin6';

export const SecurityPinForm = () => {
	const form: UseFormReturn<z.infer<typeof securityPinSchema>> = useForm<
		z.infer<typeof securityPinSchema>
	>({
		resolver: zodResolver(securityPinSchema),
	});

	const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

	const onSubmit = async (values: z.infer<typeof securityPinSchema>) => {
		console.log(values);
		redirect('/new-password');
	};

	const handleInputChange = (
		event: ChangeEvent<HTMLInputElement>,
		pinIndex: number,
		pinName: PinFields,
	) => {
		const value = event.target.value;

		if (/^\d$/.test(value)) {
			form.setValue(pinName, parseInt(value, 10));

			if (inputRefs.current[pinIndex + 1]) {
				inputRefs.current[pinIndex + 1]?.focus();
			}
		} else {
			form.setValue(pinName, '-' as unknown as number);
		}
	};

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
					<div className="my-5 flex justify-between">
						{(['pin1', 'pin2', 'pin3', 'pin4', 'pin5', 'pin6'] as PinFields[]).map(
							(pinName, index) => (
								<FormItem key={pinName}>
									<FormControl>
										<Input
											type="text"
											inputMode="numeric"
											maxLength={1}
											pattern="\d"
											placeholder="—"
											className="size-10 rounded-full border border-gray-300 text-center focus:ring-2 focus:ring-customGreen"
											{...form.register(pinName)}
											ref={(el) => {
												inputRefs.current[index] = el;
											}}
											onChange={(e) => handleInputChange(e, index, pinName)}
										/>
									</FormControl>
								</FormItem>
							),
						)}
					</div>
					<FormMessage>
						{Object.keys(form.formState.errors).length > 0 && 'Please enter valid digits'}
					</FormMessage>
					<Button className="h-10 w-full bg-customGreen text-white" type="submit">
						Accept
					</Button>
				</form>
			</Form>
		</div>
	);
};
