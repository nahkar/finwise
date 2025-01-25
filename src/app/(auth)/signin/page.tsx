import Link from 'next/link';
import { SignInForm } from '../components/AuthForm/SignInForm';

const SignInPage = () => {
	return (
		<div>
			<SignInForm />
			<div className="mt-5 text-center">
				<Link className="hover:underline" href={'/forgot-password'}>
					Forgot Password?
				</Link>
			</div>
		</div>
	);
};

export default SignInPage;

export const metadata = {
	title: 'Sign In',
};
