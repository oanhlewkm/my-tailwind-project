import React from "react";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto p-4 md:p-14 font-extralight">
      <div className="section1 py-16 md:py-24 text-center flex-col space-y-5">
        <h1 className="subtitle uppercase text-7xl font-extrabold text-accent">
          PRIVACY POLICY
        </h1>
        <div className="flex items-center justify-center">
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
        <p className="text">
          MijnAlbum BV acting under the trade name MyAlbum and registered at the
          Dutch Chamber of Commerce (Kamer van Koophandel) under number
          01105144. MijnAlbum is responsible for the processing of personal
          data. By using our service you agree to the following privacy
          statement.
        </p>
        <div>Version: October 2022</div>
        <h3 className="subtitle text-xl uppercase font-bold text-accent">
          CONTACT
        </h3>
        <ul className="text">
          <li>MyAlbum</li>
          <li>Mercatorweg 2-1</li>
          <li>Joure, Netherlands</li>
        </ul>
        <ul className="text">
          <li>T. +31513412133</li>
          <li>W. https://myalbum.com</li>
        </ul>
        <p>
          Andries Nolles the privacy office for MijnAlbum BV. He and his team
          can be reached via privacy@MyAlbum.com.
        </p>
      </div>
    </div>
  );
}
