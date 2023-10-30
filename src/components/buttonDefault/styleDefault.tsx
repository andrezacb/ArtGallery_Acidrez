import { Yeseva_One } from 'next/font/google';

const Yeseva = Yeseva_One({
	subsets: ['latin'],
	weight: ['400'],
});
export const ContentInputButton =
	' border border-[#6B4000]  bg-transparent flex items-center flex-col justify-center p-3   w-full cursor-pointer';
export const container = 'w-full ';
export const ContentInputText = `${Yeseva.className} text-white `;
export const ContetInputDisabled =
	'flex items-center  justify-center   p-3   w-full bg-zinc-300 cursor-not-allowed';
