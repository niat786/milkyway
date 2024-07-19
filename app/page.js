import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";
import TitleDescription from "../components/TitleDescription";

export const runtime = "edge";
export default function Home() {
  return (
    <>
      <SchemaMarkup></SchemaMarkup>
      <TitleDescription></TitleDescription>
      <Header></Header>
      <section className=" mx-auto lg:max-w-[96rem] p-2 md:px-4 lg:px-20 ">
        <div className="md:p-8 lg:p-10 p-4 border border-dashed rounded-xl ">
          <h1 className="text-center text-2xl md:text-3xl my-5">
            Milkyway casino online gaming app | download for Android or IOS
          </h1>

          <div className="flex flex-col space-y-2 text-lg">
            <p>
              Find the improved Milky Way V. 3. 0 - the place to be for the
              ultimate entertainment! Enjoy timeless elements such as the
              endless promotions, great looks and engaging gameplay, now
              improved for the even more excitement.
            </p>
            <div className="flex justify-center py-5 text-center">
              <a href="#play-online-games">
                <figure>
                  <Image
                    src="/images/milkyway-online.webp"
                    alt="milkyway online games"
                    width={500}
                    height={92}
                    className="rounded my-4"
                  />
                  <figcaption className="text-sm">
                    Play Milky way casino games online
                  </figcaption>
                </figure>
              </a>
            </div>
            <p>
              The game such as, Skeleton Dance 3D, 5 Deluxe, Kingdom Of Atlantis
              and many more new in addition to renewed games. games you love to
              play such as Hexa Keno and Crab King.
            </p>
            <p>
              Also, enjoy the rush of Milky Link Games where players are
              presented with a lot of action and exciting graphics. graphics.
              Come and try your luck and be the lucky winner in the Milky Way!
            </p>

            <p>
              Find the fun Milkyway Casino app that is properly designed for all
              Android or iOS operating device! ,
            </p>
            <p>
              Get started with a load of awesome features offered by the app
              that include an extensive variety of exhilarating casino games in
              which you can experience whenever and wherever.
            </p>

            <p>
              The free app includes everything below - download the Milkyway
              Casino from your local App Store and join in the cosmic adventure
              now.
            </p>

            <p>
              {" "}
              Milkyway Casino offers an excellent gaming experience for everyone
              whether you are a seasoned veteran or new to the galaxy of online
              casinos. So come and play with us today, Await the cosmic fun to
              rise.
            </p>
          </div>

          {/* <!-- slider --> */}

          {/* <!-- slider ends --> */}

          <div className="md:p-5 pt-5 w-full" id="play-online-games">
            <a
              href="http://play.milkywayapp.xyz/game/milkyway/"
              rel="external nofollow"
              target="_blank"
              className="md:w-[29rem] w-full mx-auto h-16 text-[18px] rounded  bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-700/30 hover:scale-105 duration-500 text-white flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              &nbsp; Play Online&nbsp;{" "}
            </a>
          </div>
          <div className="md:p-5 pt-5 flex justify-center space-x-2 md:space-x-10">
            <a
              href="#download-milkyway-app-android-ios"
              className="w-52 h-16 text-[18px] rounded bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-700/30 hover:scale-105 duration-500 text-white flex justify-center items-center"
            >
              <svg
                className="h-8 w-8"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6" />
              </svg>
              &nbsp; Android&nbsp;{" "}
            </a>
            <a
              href="#download-milkyway-app-android-ios"
              className="w-52 h-16 text-[18px] rounded  bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-700/30 hover:scale-105 duration-500 text-white flex justify-center items-center"
            >
              <svg
                className="h-8 w-8 "
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              &nbsp; IOS&nbsp;{" "}
            </a>
          </div>
        </div>

        <div
          id="best-milkyway-casino-games"
          className="md:p-8 lg:p-10  p-4 border border-dashed rounded-xl my-10 text-center"
        >
          <h2 className="h2">Best Games</h2>
          <p>
            The game such as, Skeleton Dance 3D, 5 Deluxe, Kingdom Of Atlantis
            and many more new in addition to renewed games. games you love to
            play such as Hexa Keno and Crab King.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3 lg:gap-5">
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/777_Fruity_400x300_vXC5U1q.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/af.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/Aladdins_Fortune_400x300.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/as.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/bkp.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/cs.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/ds.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/dsp.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/es.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/ff.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/fg.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              className="h-auto w-full rounded-lg hover:scale-105 hover:cursor-pointer transition ease-in-out duration-500"
              src="/images/games/Fish_Jackpot_Party_400x300.jpg"
              alt=""
            />
          </div>
        </div>

        <div
          id="best-features"
          className="md:p-8 lg:p-10  p-4 border border-dashed rounded-xl my-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl my-5">
            Features of Milkyway casino application.
          </h2>
          <p>
            Many sepecial games are waiting for you. You can get free turn,
            bonuses, community awards, multipliers, lasers and much more. For
            players comfort, it is open for play on any device, at any time,
            from anywhere.
          </p>
          <ul className="text-left list-disc my-10">
            <li>Accounts grouping is basic and distinguishable.</li>
            <li>User-friendly and practical functioning.</li>

            <li>Stress on safety and dependability.</li>
            <li>
              The H5 interface can work on every type of the mobile devices due
              to the built-in adaptivity option.
            </li>
          </ul>
        </div>

        <div
          id="how-to-download"
          className="md:p-8 lg:p-10  p-4 border border-dashed rounded-xl my-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl my-5">
            How to download the Milkyway casino mobile app?
          </h2>
          <p>
            Upon downloading, you are required to commence an outer-space trip
            for online casino games and reel in the thrill of hitting it big
            while playing some out of this world games on Milkyway universe!
          </p>

          <ol className="text-left list-disc my-10">
            <li>
              <strong>Stage 1:</strong> Complete the Player Registration Form
              <br />
              Get started by filling out your details to join the Milky Way
              community.
            </li>
            <li>
              <strong>Stage 2:</strong> Download your favorite Milky Way App
              Now!
              <br />
              Head straight to the download page and get the app that suits you
              best.
            </li>
            <li>
              <strong>Stage 3:</strong> You’re almost there
              <br />
              After registering and downloading the app, the MWA team will reach
              out to provide your credentials (username and password).
            </li>
            <li>
              <strong>Stage 4:</strong> Purchase first game credits
              <br />
              Prepare for action by stocking up on your first game credits.
            </li>
            <li>
              <strong>Stage 5:</strong> Let the games begin and enjoy!
              <br />
              Dive into the Milky Way gaming experience and have a blast!
            </li>
            <li>
              <strong>Stage 6:</strong> Stay in the loop!
              <br />
              Stay connected and informed with our latest updates and
              maintenance announcements.
            </li>
          </ol>
        </div>

        <div
          id="download-milkyway-app-android-ios"
          className="md:p-8 lg:p-10  p-4 border border-dashed rounded-xl my-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl my-5">
            Download the Milkyway casino mobile app for Android or IOS
          </h2>
          <p>
            Upon downloading, you are required to commence an outer-space trip
            for online casino games and reel in the thrill of hitting it big
            while playing some out of this world games on Milkyway universe!
          </p>

          <div className="md:p-5 pt-5 w-full" id="play-online-games">
            <a
              href="https://milkywayapp.xyz/"
              rel="external nofollow"
              target="_blank"
              className="md:w-[29rem] w-full mx-auto h-16 text-[18px] rounded  bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-700/30 hover:scale-105 duration-500 text-white flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z"
                  clipRule="evenodd"
                />
              </svg>
              {/* https://mwjmz.dannilu.com/mzq4zmzhmz   */}
              &nbsp; Download Milkyway App&nbsp;{" "}
            </a>
          </div>

          {/* <!-- download the app --> */}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
