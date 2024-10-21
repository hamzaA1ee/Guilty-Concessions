import '@/styles/globals.css';

//next imports
import type { Metadata } from 'next';
import Image from 'next/image';
//fonts imports
import { Inter, Lato } from 'next/font/google';
import { Montserrat } from 'next/font/google';

//providers imports
import { Providers } from '@/providers';

//assets imports
import bubbleOne from '@/../../public/assets/images/Oval Copy 2.png';
import bubbleTwo from '@/../../public/assets/images/Oval Copy 3.png';
import ovalOne from '@/../../public/assets/images/Img.png';
import bottomOval from '@/../../public/assets/images/Oval Copy.png';

const inter = Inter({ subsets: ['latin'] });
const mont = Montserrat({ subsets: ['latin'], display: 'swap' });
const lato = Lato({
  weight: ['700', '400', '300'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zen Guilty Concessions',
  description: 'Generated by Zen Trainee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${mont.className} ${inter.className}  bg-customBack h-screen `}
      >
        <Providers>{children}</Providers>
        {/* <div className='w-[320px] h-[300px] absolute top-0 right-0 sm:top-28 sm:w-[350px] sm:h-[320px] '>
          <Image
            src={ovalOne}
            alt='bubble'
            width={1600}
            height={900}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className='absolute bottom-30  sm:left-16 left-8 '>
          <Image
            src={bubbleTwo}
            width={53}
            height={51}
            alt='bubble'
          ></Image>
        </div>
        <div className='absolute bottom-3 sm:left-5 left-0  '>
          <Image
            src={bubbleOne}
            width={100}
            height={98}
            alt='bubble'
          ></Image>
        </div>
        <div className='absolute sm:bottom-0  sm:right-0 hidden '>
          <Image
            src={bottomOval}
            width={168}
            height={159}
            alt='bubble'
          ></Image>
        </div> */}
      </body>
    </html>
  );
}
