import { signIn, useSession, signOut } from "next-auth/react";
import { SiDiscord } from "react-icons/si";

const SignIn = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <button
          className="self-start flex justify-center items-center gap-2 text-base focus:outline-none bg-stone-200 text-stone-800 shadow-lg hover:shadow-2xl p-4 py-2 rounded mt-16 lg:mt-32 duration-300 md:mt-28 focus:ring-0 outline-none"
          onClick={() =>
            signIn("discord", {
              callbackUrl: "/",
            })
          }
        >
          <SiDiscord className="text-sky-900" />
          sign in with discord
        </button>
      </div>
    </div>
  );
};

export default SignIn;
