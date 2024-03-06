export default function Footer() {
  return (
    <footer
      style={{
        background: "rgb(113, 83, 138, 0.1)",
      }}
    >
      <div className="container mx-auto">
        <div className="w-full py-40 px-10">
          <div className="flex flex-col md:flex-row space-x-10 space-y-10 md:space-y-0 justify-center">
            <div className="flex-col space-y-3 text-center">
              <div className="text-accent font-extrabold text-xl uppercase">
                MyAlbum
              </div>
              <div className=" flex-col space-y-1 text-center">
                <div>
                  <a href="" className="font-light footer-link">
                    Home
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    Help center
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    Pricing
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    About us
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-col space-y-3 text-center">
              <div className="text-accent font-extrabold text-xl uppercase">
                Products
              </div>
              <div className=" flex-col space-y-1 text-center">
                <div>
                  <a href="" className="font-light footer-link">
                    MyAlbum Premium
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    Photo Books
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    iPhone App
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    Android App
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-col space-y-3 text-center">
              <div className="text-accent font-extrabold text-xl uppercase">
                For professionals
              </div>
              <div className=" flex-col space-y-1 text-center">
                <div>
                  <a href="" className="font-light footer-link">
                    MyAlbum Pro
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    Team up
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    Photo Contests
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    NGOs & Schools
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-col space-y-3 text-center">
              <div className="text-accent font-extrabold text-xl uppercase">
                Follow us
              </div>
              <div className=" flex-col space-y-1 text-center">
                <div>
                  <a href="" className="font-light footer-link">
                    Twitter
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    Discord
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    Instagram
                  </a>
                </div>
                <div>
                  <a href="" className="font-light footer-link">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
