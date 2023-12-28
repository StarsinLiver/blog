import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import initMain from "../assets/js/site";

function Header(props: any) {
  useEffect(() => {
    initMain();
  },[])
  return (
    <>
      {/* 헤더부분 , 배너부분 */}
      <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
        <div id="header" className="nav-collapse">
          <div className="row clearfix">
            <div className="col-1">
              {/* <!--Logo--> */}
              <div id="logo">
                <Link to="/">
                {/* <!--Logo that is shown on the banner--> */}
                <img
                  src={require("../assets/images/logo-tinylittlelife.png")}
                  id="banner-logo"
                  alt="Landing Page"
                />
                {/* <!--End of Banner Logo--> */}

                {/* <!--The Logo that is shown on the sticky Navigation Bar--> */}
                <img
                  src={require("../assets/images/logo-tinylittlelife.png")}
                  id="navigation-logo"
                  alt="Landing Page"
                />
                </Link>
                {/* <!--End of Navigation Logo--> */}
              </div>
              {/* <!--End of Logo--> */}

              <aside>
                {/* <!--Social Icons in Header--> */}
                <ul className="social-icons">
                  <li>
                    <Link title="behance" to="/">
                      메인
                    </Link>
                  </li>
                </ul>

                {/* <!--End of Social Icons in Header--> */}
              </aside>

              {/* <!--Main Navigation--> */}
              <nav id="nav-main">
                <ul>
                  <li>
                    <a href="#banner">Home</a>
                  </li>
                  <li>
                    <a href="#services">MY PROFILE</a>
                  </li>
                  <li>
                    <a href="#about">REPRESENTATIVE</a>
                  </li>
                  <li>
                    <a href="#clients">SKILL</a>
                  </li>
                  <li>
                    <a href="#testimonials">PROJECTS</a>
                  </li>
                  <li>
                    <a href="#gallery">GALLARY</a>
                  </li>
                </ul>
              </nav>
              {/* <!--End of Main Navigation--> */}

              <div id="nav-trigger">
                <span></span>
              </div>
              <nav id="nav-mobile"></nav>
            </div>
          </div>
        </div>
        {/* <!--End of Header--> */}

        {/* <!--Banner Content--> */}
        <div id="banner-content" className="row clearfix">
          <div className="col-38">
            <div className="section-heading">
              <h1>관리 페이지</h1>
              <h2>{props.name}</h2>
            </div>
            {/* <!--Call to Action--> */}
            <Link to="/" className="button">
              메인 페이지로 돌아가기
            </Link>
            {/* <!--End Call to Action--> */}
          </div>
        </div>
        {/* <!--End of Row--> */}
      </header>
      {/* 헤더부분 , 배너부분 끝 */}
    </>
  );
}

export default Header;
