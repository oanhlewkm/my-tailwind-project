"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div id="section1" className="relative flex flex-col h-dvh">
        <div className="flex justify-between">
          <div className="flex justify-start py-20 px-8 md:px-20 z-20">
            <div className="flex-col text-left space-y-10 md:w-2/4 px-0 md:px-7">
              <h1 className="font-extrabold	uppercase lg-title text-white">
                MAKING MEMORIES TOGETHER
              </h1>
              <div
                className="text-white"
                style={{
                  fontSize: "clamp(18px, 1.7vw, 25px)",
                  textShadow: "rgb(100 100 111/70%)0px 0px 5px",
                  maxWidth: 400,
                }}
              >
                Share and collect photos and videos. Relive the most beautiful
                moments.
              </div>
              <div>
                <a
                  className="rounded-full bg-white px-4 py-2 border-solid border cursor-pointer hover:text-violet-700 text-stone-700"
                  style={{
                    borderColor: "#302644",
                  }}
                >
                  Let's start
                </a>
              </div>
            </div>
          </div>
          <div className="block front-image absolute">
            <Image
              src={
                "https://www.myalbum.com/_next/image?url=%2Fimages%2Ffrontpage%2Fphone.png&w=750&q=100"
              }
              alt="frontImage"
              width={750}
              height={800}
              sizes="(max-width: 800px) 50vw, (max-width: 1100) 40vw, 700px"
            />
            {/* <div className="image"></div> */}
          </div>
        </div>
      </div>
      <div id="share">
        <div className="flex justify-center py-20 px-8 md:px-20 items-center">
          <div className="flex-col text-center md:text-left space-y-4 md:w-2/4">
            <h2
              className="font-extrabold	uppercase title px-0 md:px-7"
              style={{ color: "rgb(113, 83, 138)" }}
            >
              SHARE PHOTOS AND VIDEOS PRIVATELY
            </h2>
            <div className="flex items-center justify-center md:justify-start">
              <div
                className="bg-white text-center"
                style={{
                  height: 8,
                  width: "50%",
                  maxWidth: 60,
                  minWidth: 40,
                  background: "rgb(113, 83, 138)",
                }}
              ></div>
            </div>
            <div className="px-0 md:px-7">
              Create an online album for free. Keep each other informed and
              invite family and friends. You make memories together!
            </div>
            <div className="flex space-x-3 justify-center">
              <a>
                <Image
                  src={
                    "https://www.myalbum.com/_next/image?url=%2Fimages%2Fapp%2Fapple_appstore-color.png&w=384&q=75"
                  }
                  alt="appStore"
                  width={142}
                  height={42}
                />
              </a>
              <a>
                <Image
                  src={
                    "https://www.myalbum.com/_next/image?url=%2Fimages%2Fapp%2Fgoogle_playstore-color.png&w=384&q=75"
                  }
                  alt="chPlay"
                  width={142}
                  height={42}
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block w-2/4">
            <div className="flex justify-end">
              <Image
                src={
                  "https://www.myalbum.com/_next/image?url=%2Fimages%2Ffrontpage%2Ffrontpage_image_private_sharing.png&w=750&q=50"
                }
                alt="CREATE A PHOTO BOOK right"
                width={642}
                height={625}
                sizes="(max-width: 1620px) 40vw, 664px"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="section3" style={{ background: "#302644" }}>
        <div className="container mx-auto flex justify-center pt-20">
          <div className="flex-col space-y-3 text-white text-center">
            <div className="px-8 space-y-8">
              <h2 className="font-extrabold	uppercase title">
                CREATE A PHOTO BOOK
              </h2>
              <div className="flex items-center justify-center">
                <div
                  className="bg-white text-center"
                  style={{
                    height: 10,
                    width: 60,
                  }}
                ></div>
              </div>

              <div className="flex items-center justify-center">
                <p
                  style={{
                    maxWidth: 650,
                    lineHeight: "150%",
                  }}
                >
                  Relive your memories with a Premium photo book. Our unique
                  editor helps create a world-class design. Create photo books
                  together!
                </p>
              </div>
              <div>
                <a
                  className="rounded-full bg-white px-4 py-2 border-solid border cursor-pointer hover:text-violet-700 text-stone-700"
                  style={{
                    borderColor: "#302644",
                  }}
                >
                  Let's start
                </a>
              </div>
            </div>
            <div className="w-full">
              <Image
                src={
                  "https://www.myalbum.com/_next/image?url=%2Fimages%2Ffrontpage%2Fphotobooks.png&w=1920&q=50"
                }
                width={1726}
                height={1726}
                alt="CREATE A PHOTO BOOK"
                sizes="(max-width: 1726px) 100vw, 1726px"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
