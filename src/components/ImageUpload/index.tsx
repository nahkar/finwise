'use client';
import { config } from '@/lib/config';
import { IKImage, ImageKitProvider, IKUpload } from 'imagekitio-next';
import { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import {
	IKUploadResponse,
	UploadError,
} from 'imagekitio-next/dist/types/components/IKUpload/props';

const {
	env: {
		imagekit: { publicKey, urlEndpoint },
	},
} = config;

type Props = {
	onFileChange: (filePath: string) => void;
};
const authenticator = async () => {
	try {
		const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Request failed with status ${response.status}: ${errorText}`);
		}

		const data = await response.json();
		const { signature, expire, token } = data;
		return { signature, expire, token };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(`Authentication failed: ${error.message}`);
		} else {
			throw new Error(`Authentication failed: ${String(error)}`);
		}
	}
};
const ImageUpload = ({ onFileChange }: Props) => {
	const ikUploadRef = useRef<HTMLInputElement | null>(null);
	const [file, setFile] = useState<{ filePath: string } | null>(null);

	const onError = (err: UploadError) => {
		console.log('onError', err);
	};
	const onSuccess = (response: IKUploadResponse) => {
		const { filePath } = response;
		setFile({ filePath });
		onFileChange(filePath);
	};

	return (
		<ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
			<IKUpload
				className="hidden"
				ref={ikUploadRef}
				onError={onError}
				onSuccess={onSuccess}
				fileName="test-upload.png"
			/>
			<button
				className="mb-3 mx-auto flex gap-2 h-10 w-52 items-center justify-center rounded-md bg-customGreen text-center text-base text-white hover:bg-customGreen-light"
				onClick={(e) => {
					e.preventDefault();
					if (ikUploadRef.current) {
						ikUploadRef.current?.click();
					}
				}}
			>
				<Upload size={14} />
				<div>
					{!file && <p className="text-light-100 text-base flex items-center">Upload a file</p>}
					{file && (
						<p className="upload-filename text-light-100 text-base text-ellipsis overflow-hidden whitespace-nowrap w-40">
							{file.filePath}
						</p>
					)}
				</div>
			</button>

			{file && <IKImage path={file.filePath} alt={file.filePath} width={500} height={500} />}
		</ImageKitProvider>
	);
};
export default ImageUpload;
