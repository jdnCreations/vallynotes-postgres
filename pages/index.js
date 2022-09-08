import Head from 'next/head';
import styles from '../styles/Home.module.css';
import vgLogo from '../public/vg.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='mb-32'>
          <Image src={vgLogo} alt='' />
        </div>
        <h1 className='w-[85%] md:w-[100%] text-6xl md:text-6xl font-[700] title text-primary mb-16 leading-[54px]'>
          YOUR VALORANT NOTES APP
        </h1>
        <Link
          href='/signup'
          className='landingButton bg-secondary text-white hover:shadow-lg w-[85%]
          rounded-lg font-bold py-3 text-2xl md:text-4xl border-secondary 
          hover:bg-transparent hover:text-secondary transition-all 
          ease-in-out duration-300 border-2 mb-4'
        >
          SIGN UP
        </Link>
        <Link
          href='/login'
          className='landingButton bg-primary text-white hover:shadow-lg w-[85%]
          rounded-lg font-bold py-3 text-2xl md:text-4xl border-primary 
          hover:bg-transparent hover:text-primary transition-all 
          ease-in-out duration-300 border-2'
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
}
