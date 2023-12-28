import React from "react";

function Footer() {
  return (
    <>
      {/* <!--Footer--> */}
      <footer id="landing-footer" className="clearfix">
        <div className="row clearfix">
          <p id="copyright" className="col-2">
            Made with love by{" "}
            <a href="https://www.shapingrain.com">Little Tiny Life </a>
            <i className="fa fa-heart fa-sm"></i>
          </p>

          {/* <!--Social Icons in Footer--> */}
          <ul className="col-2 social-icons">
            <li>
              <a
                target="_blank"
                title="Twitter"
                href="http://www.twitter.com/whitesanchan"
              >
                <i className="fa fa-twitter fa-1x"></i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                title="Instagram"
                href="http://www.instagram.com/sanha0203"
              >
                <i className="fa fa-instagram fa-1x"></i>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
          {/* <!--End of Social Icons in Footer--> */}
        </div>
      </footer>
      {/* <!--End of Footer--> */}
    </>
  );
}

export default Footer;
