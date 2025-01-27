import { SecurityPinForm } from '../components/AuthForm/SecurityPinForm';
import { SocialSignup } from '../components/SocialSignup';

const ForgotPasswordConfirmPage = () => {
	return (
		<div>
			<p className="text-2xl font-bold">Enter security pin</p>
			<SecurityPinForm />
			<SocialSignup />
		</div>
	);
};

export default ForgotPasswordConfirmPage;

export const metadata = {
	title: 'Forgot Password Confirm',
};
