import { Cormorant_Garamond } from 'next/font/google';

const Cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['400', '300', '500', '600', '700'],
});

export const container = 'max-w-xs';
export const FormLabel =
	' flex text-[20px] font-semibold  font-Lato tracking-wider text-black';
export const contentInputErro = `${Cormorant.className} text-white text-sm font-medium  font-Lato bg-transparent  border-0  outline-none flex placeholder:text-[20px] placeholder-[#b91c1c] placeholder-opacity-50`;
export const contentInput = `${Cormorant.className} placeholder:italic w-4/5 text-[16px]  text-white font-medium bg-transparent focus:outline-none  border-0  outline-none flex placeholder:text-[20px] placeholder-[#FFA842] placeholder-opacity-50`;
export const containerInputErro =
	'w-full mt-1  h-11 border border-[#b91c1c] px-2 py-3 outline-none text-justify rounded-[5px]  ';
export const containerInput =
	' w-full  mt-1  h-11 border border-[#FFA842] rounded-[5px] px-2 py-3 outline-none text-black text-justify focus-within:border-emerald-500';
export const messageErro =
	'text-xs font-Lato text-[#b91c1c] font-normal tracking-tighter mt-3 ';
