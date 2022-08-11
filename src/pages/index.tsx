import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Falcon from "src/assets/falcon.png";
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
          <Image src={Falcon} width="50" height="50" alt="Falcon" />
          <div>Products</div>
        </div>
        <main className="flex flex-col gap-4 justify-center items-center">
          <h1>Welcome to Penge :D</h1>
          <h2>
            Penge is my online shop manily dedicated to sell high quality
            clothing
          </h2>
          <div>
            I usually sell my clothing either at Depop or Grailed. The prices
            are usually higher on those apps but in this website it will be
            lower as there won{`'`}t be middle man.
          </div>
          <h2>Latest products</h2>
        </main>
      </div>
    </>
  );
};

export default Home;
