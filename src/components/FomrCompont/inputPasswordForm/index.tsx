import { PasswordClose, PasswordIcon } from '@/components/icons';
import { useState } from 'react';
import {
	Controller,
	FieldValues,
	UseControllerProps,
	useController,
} from 'react-hook-form';
import {
	FormLabel,
	container,
	containerInput,
	containerInputErro,
	contentInput,
	contentInputErro,
	messageErro,
} from './stylePassword';

interface PasswordErrors {
	length?: string;
	uppercase?: string;
	lowercase?: string;
	number?: string;
	symbol?: string;
}

type inputPasswordProps<T extends FieldValues> = UseControllerProps<T> & {
	name?: string;
	placeholder?: string;
	isRequired?: boolean;
	label?: string;
	styles?: any;
	isDisabled?: boolean;
	maxLength?: number;
	readOnly?: boolean;
	rules?: {
		required?: {
			value: boolean;
			message: string;
		};
		pattern?: {
			value: RegExp;
			message: string;
		};
		minLength?: {
			value: number;
			message: string;
		};
		maxLength?: {
			value: number;
			message: string;
		};
	};
};

export const InputPasswordForm = <T extends FieldValues>({
	name,
	placeholder,
	isRequired,
	control,
	label,
	rules,
	isDisabled,
	maxLength,
	readOnly,
}: inputPasswordProps<T>) => {
	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error },
	} = useController<T>({
		name,
		control,
		rules: rules ?? {},
	});

	const [confirmPasswordIsvisible, setConfirmPasswordIsvisible] =
		useState<any>(false);

	const handleConfirmPasswordIsVisibleClick = () => {
		setConfirmPasswordIsvisible(() => !confirmPasswordIsvisible);
	};

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<div className={container}>
					<label className={FormLabel}>
						{label} {isRequired && <label className='text-red-600'> *</label>}
					</label>
					<div className={!error ? containerInput : containerInputErro}>
						<div className='flex-row flex mb-1 justify-between  '>
							<input
								{...field}
								value={value}
								type={confirmPasswordIsvisible ? 'text' : 'password'}
								className={!error ? contentInput : contentInputErro}
								placeholder={placeholder}
								onBlur={onBlur}
								onChange={(e) => onChange(e.target.value)}
								disabled={isDisabled}
								maxLength={maxLength}
								readOnly={readOnly}
							/>
							<button
								className='w-10 flex flex-row'
								type='button'
								onClick={handleConfirmPasswordIsVisibleClick}
								disabled={isDisabled}>
								{confirmPasswordIsvisible ? (
									<PasswordIcon
										width='21px'
										height='21px'
										className='items-center justify-center flex h-screen'
									/>
								) : (
									<PasswordClose
										width='21px'
										height='21px'
									/>
								)}
							</button>
						</div>

						{error && <span className={messageErro}>{error.message}</span>}

						<input
							type='hidden'
							ref={ref} // passa o ref do campo de entrada para o Controller
						/>
					</div>
				</div>
			)}
		/>
	);
};
