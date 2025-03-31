import React from "react";
import background from "./pic/Homepage - background.jpg";
import frog1 from "./pic/frog1.png";
import frog2 from "./pic/frog2.png";
import frog3 from "./pic/frog3.png";
import Section from "./TopicSection";
import info from "./info.json";

const img_style = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "brightness(70%)",
};

const lobby_style = {
  padding: "0",
  margin: "0",
  position: "relative",
  height: "100vh",
  width: "100vw",
};

const evision_style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "justify",
  backgroundColor: "rgba(255,255,255,0.05)",
  padding: "0% 2% 0% 2%",
  borderRadius: "30px",
  width: "90%",
  fontFamily: "fantasy",
};

const section = {
  backgroundColor: "rgb(38, 44, 48)",
  padding: "0",
  margin: "0",
  position: "relative",
  height: "100vh",
  width: "100vw",
};

const contact_info = {
  display: "flex",
  width: "100%",
  margin: "auto",
};

const card1 = {
  margin: "0 4vw",
  width: "12vw",
  height: "16vh",
  display: "flex",
  flexDirection: "column",
};

const card2 = {
  background: "rgba(54,54,54,0.8)",
  margin: "0 4vw",
  width: "12vw",
  height: "8vh",
  display: "flex",
  flexDirection: "column",
  borderRadius: "5%",
};

const frog = {
  float: "right",
  width: "12vw",
  height: "16vh",
  objectFit: "contain",
};

const catagory = {
  padding: "0",
  margin: "0",
  lineHeight: "2vh",
  fontSize: "150%",
  fontWeight: "bold",
  color: "whitesmoke",
  fontFamily: "fantasy",
};

function IndexPage() {
  return (
    <>
      <div id="lobby" className="lobby" style={lobby_style}>
        <img style={img_style} src={background} alt="" />
        <div
          className="PageInformation"
          style={{
            position: "absolute",
            padding: "0",
            margin: "0 2vw",
            top: "92vh",
            right: "0vw",
            lineHeight: "3vh",
            textAlign: "right",
            color: "white",
            fontSize: "75%",
          }}
        >
          Copyright © 2023 by WebApp Group11
          <br />
          <i>No.1, Sec. 4, Roosevelt Road, Taipei, Taiwan</i>
        </div>
        <div className="evision" style={evision_style}>
          <p
            style={{
              lineHeight: "10px",
              fontSize: "50px",
              color: "rgb(238,238,0)",
              fontWeight: "Bold",
            }}
          >
            Our Vision
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "#FFFACD",
              letterSpacing: "0.2vw",
              lineHeight: "5vh",
              fontWeight: "Bold",
            }}
          >
            {info.vision}
          </p>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "72vh",
          left: "20vw",
        }}
      >
        <div className="contact-info" style={contact_info}>
          <div className="card" style={card1}>
            <a href="#Section1" target="_self">
              <img src={frog1} alt="" style={frog} />
            </a>
          </div>
          <div className="card" style={card1}>
            <a href="#Section2" target="_self">
              <img src={frog2} alt="" style={frog} />
            </a>
          </div>
          <div className="card" style={card1}>
            <a href="#Section3" target="_self">
              <img src={frog3} alt="" style={frog} />
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "86vh",
          left: "20vw",
        }}
      >
        <div className="contact-info" style={contact_info}>
          <div className="card" style={card2}>
            <a href="#Section1" target="_self">
              <div style={catagory}>
                <p>志工招募</p>
              </div>
            </a>
          </div>
          <div className="card" style={card2}>
            <a href="#Section2" target="_self">
              <div style={catagory}>
                <p>生態保育</p>
              </div>
            </a>
          </div>
          <div className="card" style={card2}>
            <a href="#Section3" target="_self">
              <div style={catagory}>
                <p>其他資訊</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id="Section1" style={section}>
        <Section
          title={info.title1}
          subtilte={info.slogan1}
          desc={info.desc1}
          bulletin={info.section1}
          imageset={1}
        />
      </div>
      <div id="Section2" style={section}>
        <Section
          title={info.title2}
          subtilte={info.slogan2}
          desc={info.desc2}
          bulletin={info.section2}
          imageset={2}
        />
      </div>
      <div id="Section3" style={section}>
        <Section
          title={info.title3}
          subtilte={info.slogan3}
          desc={info.desc3}
          bulletin={info.section3}
          imageset={3}
        />
      </div>
    </>
  );
}

export { IndexPage };
