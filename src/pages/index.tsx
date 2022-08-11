import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { trpc } from "src/utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Penge</title>
        <meta
          name="description"
          content="Penge is an online shop that sells high-quality clothing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <div className="flex justify-evenly items-center pb-4">
          <Image src="/assets/falcon.png" width="50" height="50" alt="Falcon" />
          <div className="font-bold text-lg md:text-xl lg:text-2xl">
            Products
          </div>
        </div>
        <main className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-lg font-bold md:text-xl lg:text-2xl">
            Welcome to Penge :D
          </h1>
          <div className="border border-stone-900 rounded md:flex md:max-w-4xl">
            <div className="bg-stone-900 text-stone-100 md:flex md:justify-center">
              <h2 className="md:text-xl p-2 md:self-center font-bold lg:text-2xl">
                Penge is my online shop manily dedicated to sell high quality
                clothing
              </h2>
            </div>
            <div className="p-2 md:text-lg lg:text-xl">
              I usually sell my clothing either at Depop or Grailed. The prices
              are usually higher on those apps but in this website it will be
              lower as there won{`'`}t be middle man.
              <div className="flex justify-center">
                <button className="p-2 bg-gradient-to-l to-green-900 from-green-800 text-stone-100 rounded w-full md:text-lg font-bold hover:bg-gradient-to-l hover:to-green-600 hover:from-green-700 lg:text-xl">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
            Latest products
          </h2>
        </main>
      </div>
    </>
  );
};

export default Home;
