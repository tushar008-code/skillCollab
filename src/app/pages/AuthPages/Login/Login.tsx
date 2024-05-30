/** @format */

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import googleIcon from './assets/google.png';
import facebookIcon from './assets/Facebook.png';
import appleIcon from './assets/apple.png';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import logoImg from './assets/logo.png';

const formSchema = z.object({
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
function Login() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<div className='w-[642px] mx-auto px-14'>
			<img
				className=' w-max mx-auto block mb-[30px]'
				src={logoImg}
				alt=''
			/>
			<p className='text-base text-center text-gray-400 mb-[42px]'>
				Lorem ipsum dolor sit amet. Qui voluptates enim est quaerat voluptatem
				qui labore internos.
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-4'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem className='w-[418px] max-w-full mx-auto'>
								<FormLabel className='text-base text-center text-gray-400 '>
									Email
								</FormLabel>
								<FormControl>
									<Input
										type='email'
										placeholder='Enter Your Email Address'
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem className='w-[418px] max-w-full  mx-auto '>
								<FormLabel className='text-base text-center text-gray-400 '>
									Password
								</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='************'
										{...field}
									/>
								</FormControl>
								<FormMessage />
								<h6 className='text-end text-sm text-sky-400 font-medium cursor-pointer'>
									Forgot Password?
								</h6>
							</FormItem>
						)}
					/>
					<FormItem className='w-[418px] max-w-full  mx-auto '>
						<Button type='submit'>Log in</Button>
						<h5>
							Don’t have an account? <span>Sign Up</span>
						</h5>
						<div>or</div>
						<ul className='flex items-center gap-3'>
							<li>
								<img
									src={googleIcon}
									alt=''
								/>
							</li>
							<li>
								<img
									src={facebookIcon}
									alt=''
								/>
							</li>
							<li>
								<img
									src={appleIcon}
									alt=''
								/>
							</li>
						</ul>
					</FormItem>
				</form>
			</Form>
		</div>
	);
}

export default Login;
