import React from "react";
import { Carousel } from "react-responsive-carousel";

import "./Homepage.css";
function Homepage() {
  return (
    <div className="main_contianer">
      <div className="subcontainer_one">
        <header className="flex-row justify-contents align-items">
          {/* <Carousel>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/beautiful-summer-spring-meadow-blue-flowers-forget-me-nots-two-flying-butterflies-wild-nature-landscape-beautiful-182636005.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/relaxing-calm-sea-view-open-ocean-water-sunset-sky-tranquil-nature-background-infinity-horizon-concept-endless-banner-107141767.jpg"
              alt=""
            />
          </div>
        </Carousel> */}
          <img src={"imgs/logo.png"} alt="logo_pic" />
          <h1>Hiking Advanture</h1>
        </header>
        <nav className="navbar flex-row">
          <ul className="flex-row">
            <li>Home</li>
            <li>About</li>
            <li>Package</li>
            <li>Gallery</li>
            <li>Contacts</li>
          </ul>
          <div className="searchbar_container flex-row justify-contents align-items">
            <label htmlFor="searchbar">
              <i className="fas fa-search "></i>
            </label>
            <input id="searchbar" type={"text"} placeholder="Search" />
          </div>
        </nav>
        <div className="sectionAB_container">
          <section className="subContainer_one_section_A">
            <div>
              <p className="star">★★★★★</p>
              <p className="loremWordsA">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h2 className="Quotes">-QUOTES-</h2>
            </div>
          </section>
          <section className="subContainer_one_section_B">
            <div className="sectionB_img_container">
              <img src={"/imgs/pngwing.com.png"} alt="mountiane_img" />
            </div>
            <h1>HIKE MORE</h1>
            <h2>━━━Worry Less━━━</h2>
            <p className="loremWordsB">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="learnMore">Learn More</button>
          </section>
        </div>
      </div>
      <div className="black_strip"></div>
      <div className="subcontainer_two">
        {" "}
        <div>
          <h2>
            {" "}
            1000+Route. 1 Million Hikers <br /> Memorable Memories
          </h2>
        </div>
        <div className="center_black_Box">
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="Footer_container">
        <footer>
          <h1>Coose Your Level</h1>
          <ul className="footer_links_list">
            <li>
              <h1>Beginner</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button>Learn More</button>
            </li>
            <li>
              <h1>Experienced</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button>Learn More</button>
            </li>
            <li>
              <h1>Experts</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button>Learn More</button>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
