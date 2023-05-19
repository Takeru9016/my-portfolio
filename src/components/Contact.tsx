import Link from "next/link";
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

export default function Contact() {
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL;
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-32">
        <h2 className="flex justify-center items-center rounded-lg h-14 text-2xl bg-vingo/20 w-fit px-8 text-vingo">
          Contact me
        </h2>
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="bg-vingo/5 flex flex-col justify-center items-center p-8 md:p-14 lg:p-20 w-full md:w-[500px] rounded-xl">
        <Link
            href={githubUrl ? githubUrl : ""}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-[#24292F] to-white w-full md:w-72 rounded-full mb-5 md:mb-10"
          >
            <FaInstagram />
            Connect on Github
          </Link>
          <Link
            href={linkedinUrl ? linkedinUrl : ""}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-pink-500 to-orange-400 w-full md:w-72 rounded-full mb-5 md:mb-10"
          >
            <FaInstagram />
            Connect on LinkedIn
          </Link>
          <Link
            href={twitterUrl ? twitterUrl : ""}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-cyan-500 to-blue-500 w-full md:w-72 rounded-full mb-5 md:mb-10"
          >
            <FaTwitter />
            Connect on Twitter
          </Link>
          <Link
            href={discordUrl ? discordUrl : ""}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-purple-600 to-blue-500 w-full md:w-72 rounded-full mb-5 md:mb-10"
          >
            <FaDiscord />
            Connect on Discord
          </Link>
          <Link
            href={instagramUrl ? instagramUrl : ""}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-pink-500 to-orange-400 w-full md:w-72 rounded-full mb-5 md:mb-10"
          >
            <FaInstagram />
            Connect on Instagram
          </Link>
          <Link
            href={`mailto:${email}`}
            className="text-white flex justify-center items-center gap-5 px-5 py-5 bg-gradient-to-br from-green-400 to-blue-600 w-full md:w-72 rounded-full"
          >
            <SiMaildotru />
            Mail Me
          </Link>
        </div>
      </div>
    </>
  );
}
