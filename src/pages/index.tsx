import { AuthRequest } from '@/Types/intefaces/Auth/authRequest';
import { InputEmail } from '@/components/FomrCompont/inputEmail';
import { InputPasswordForm } from '@/components/FomrCompont/inputPasswordForm';
import { ButtonDefault } from '@/components/buttonDefault';
import { Cinzel_Decorative, Cormorant_Garamond, Inter } from 'next/font/google';
import { useForm } from 'react-hook-form';

const inter = Inter({ subsets: ['latin'] });

const defaultValues = {
	email: '',
	password: '',
};
const Cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['400', '300', '500', '600', '700'],
});
const Cinzel = Cinzel_Decorative({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
});

export default function Home() {
	const { control } = useForm<AuthRequest>({
		defaultValues,
		mode: 'all',
	});
	return (
		<div className='bg-[#010205] w-[600px] h-[400px] mx-auto flex flex-col mt-6 border-double border-[14px] border-[#EEB156]'>
			<h1
				className={`${Cinzel.className} shadow italic mt-10 mb-5 font-bold text-[#eeb156e3] text-center flex-col flex justify-center text-[40px] `}
				style={{ fontStyle: 'italic' }}>
				ACIDREZ
			</h1>
			<div className='mx-auto flex-col flex justify-center  w-[300px]'>
				<div className=''>
					<InputEmail
						name='email'
						maxLength={100}
						control={control}
						placeholder='Email'
						rules={{
							required: {
								value: true,
								message: 'Campo obrigatório!',
							},
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
								message:
									'O e-mail do usuario deve conter "@" e ".com" no endereço!',
							},
						}}
					/>
				</div>
				<div className='mt-6'>
					<InputPasswordForm
						control={control}
						name='password'
						maxLength={20}
						placeholder='Senha'
						rules={{
							required: {
								value: true,
								message: 'Campo obrigatório!',
							},
						}}
					/>
				</div>
				<div className='flex gap-1 mt-3 mb-3'>
					<span
						className={`${Cormorant.className}  text-white  flex  text-[15px] font-light`}>
						Não tem conta ?
					</span>
					<span
						className={`${Cormorant.className}   h-[19px] text-white font-bold flex text-[15px]  cursor-pointer hover:text-[#eeb156e3] hover:border-b m-0 hover:border-white `}>
						Acesse aqui
					</span>
				</div>
				<div>
					<div className='w-[230px] p-1 flex flex-col justify-center mx-auto'>
						<ButtonDefault
							type='submit'
							name='ENTRAR'
							//disabled={!isValid}
							//onClick={handleSalvarClick}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
