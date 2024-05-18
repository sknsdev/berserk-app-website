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
        <title>Наше Приложение</title>
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
                href={'/beta-release-Berserk-Assistant.apk'}
                download
                className={`py-2 px-4 rounded-full text-white transition-colors duration-300 ${hover ? 'bg-blue-700' : 'bg-blue-500'
                  }`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Скачать .apk
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
