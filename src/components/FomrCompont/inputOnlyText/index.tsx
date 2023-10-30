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
} from './styleText';

import { regexText } from '@/utils';
type inputFormProps<T extends FieldValues> = UseControllerProps<T> & {
	icon?: any;
	name?: string;
	label?: string;
	isRequired?: boolean;
	placeholder?: string;
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

export const InputOnlyText = <T extends FieldValues>({
	icon,
	name,
	label,
	isRequired,
	placeholder,
	control,
	rules,
	isDisabled,
	maxLength,
	readOnly,
}: inputFormProps<T>) => {
	const {
		field: { onChange, onBlur, value },
		fieldState: { error },
	} = useController<T>({
		name,
		control,
		rules: rules ?? {},
	});

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<div className={container}>
					<label className={FormLabel}>
						{label}
						{icon && <div className='flex flex-row cursor-pointer'>{icon}</div>}
						{isRequired && <label className='text-red-600'> *</label>}
					</label>
					<div className={!error ? containerInput : containerInputErro}>
						<div className='flex-col flex mb-3'>
							<input
								{...field}
								value={value}
								type='text'
								className={!error ? contentInput : contentInputErro}
								placeholder={placeholder}
								onBlur={onBlur}
								onChange={(e) => onChange(regexText(e.target.value))}
								disabled={isDisabled}
								maxLength={maxLength}
								readOnly={readOnly}
								autoComplete='off'
							/>
							{error && <span className={messageErro}>{error.message}</span>}
						</div>
					</div>
				</div>
			)}
		/>
	);
};
