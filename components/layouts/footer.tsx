export default function Footer() {
  return (
    <footer
      style={{
        background: "rgb(113, 83, 138, 0.1)",
      }}
      className="font-extralight"
    >
      <div className="container mx-auto">
        <div className="w-full py-20 md:py-40 px-10">
          <div className="footer-menu flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0 justify-center">
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
          <div className="footer-bottom flex flex-row justify-center py-6">
            <div className="flex flex-row space-x-3 text-center">
              <div>
                <a href="" className="font-light footer-link">
                  Legal
                </a>
              </div>
              <div>
                <a href="/privacy" className="font-light footer-link">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
