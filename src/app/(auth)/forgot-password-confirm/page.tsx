import { SecurityPinForm } from '../components/AuthForm/SecurityPinForm';

const ForgotPasswordConfirmPage = () => {
	return (
		<div>
			<p className="text-2xl font-bold">Enter security pin</p>
			<SecurityPinForm />
		</div>
	);
};

export default ForgotPasswordConfirmPage;

export const metadata = {
	title: 'Forgot Password Confirm',
};
