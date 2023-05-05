import Link from "next/link";
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

export default function Contact() {
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL;
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const email = process.env.NEXT_PUBLIC_EMAIL;

  return (
    <>
      <div className="flex justify-center items-center mt-32">
        <h2 className="flex justify-center items-center rounded-lg h-14 text-2xl bg-vingo/20 w-fit px-8 text-vingo">
          Contact me
        </h2>
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="bg-vingo/5 flex flex-col justify-center items-center p-5 w-[500px] rounded-xl">
          <Link
            href={twitterUrl ? twitterUrl : ""}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-cyan-500 to-blue-500 w-72 rounded-full"
          >
            <FaTwitter />
            Connect on Twitter
          </Link>
          <Link
            href={discordUrl ? discordUrl : ""}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-purple-600 to-blue-500 mt-10 w-72 rounded-full"
          >
            <FaDiscord />
            Connect on Discord
          </Link>
          <Link
            href={instagramUrl ? instagramUrl : ""}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-pink-500 to-orange-400 mt-10 w-72 rounded-full"
          >
            <FaInstagram />
            Connect on Instagram
          </Link>
          <Link
            href={`mailto:${email}`}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-green-400 to-blue-600 mt-10 w-72 rounded-full"
          >
            <SiMaildotru />
            Mail Me
          </Link>
        </div>
      </div>
    </>
  );
}
