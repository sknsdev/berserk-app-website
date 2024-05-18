// pages/index.js
"use client"
// pages/index.js
import { useState } from 'react';
import Head from 'next/head';

import logo from '@/app/images/1.jpg'
import Image from 'next/image';

const Home = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Berserk assistant</title>
      </Head>
      <main className="mx-2 p-6 max-w-lg md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image className="h-96 w-full object-cover md:w-48" src={logo} alt="Превью приложения" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">
              BERSERK ASSISTANT
            </h1>
            <p className="text-gray-700 mb-4 text-center md:text-left">
              3 сета карт, фильтры, поиск, удобные функции для игры - расчёт атаки карт, бросок кубика, список правил, глоссарий и многое другое.
            </p>

            <p className="text-gray-400 mb-4 text-center md:text-left">
              Приложение находится в стадии публичного теста. Загрузка происходит только с официального сайта berserk-app.ru
            </p>
            <div className="text-center md:text-left">
              <a
                href={'https://disk.yandex.ru/d/_ZpqZ02copkamw'}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                target='_blank'
              >
                <button className={`py-2 px-4 rounded-full text-white transition-colors duration-300 flex flex-row gap-2 ${hover ? 'bg-blue-700' : 'bg-blue-500'
                  }`}>
                  Скачать .apk c Яндекс.Диск
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
