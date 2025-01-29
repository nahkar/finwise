'use client';
import ImageUpload from '@/components/ImageUpload';

const DashboardPage = () => {
	const handleFileChange = (filePath: string) => {
		console.log('File uploaded:', filePath);
	};
	return (
		<div className="flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-3xl font-bold">Dashboard</h1>
				<p className="mt-2 text-lg">Welcome to your dashboard!</p>
				<ImageUpload onFileChange={handleFileChange} />
			</div>
		</div>
	);
};

export default DashboardPage;
