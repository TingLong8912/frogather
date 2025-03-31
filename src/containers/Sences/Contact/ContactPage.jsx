import React from "react";
import background from "./Contact - background.jpg";
import shot4 from "./shot/shot4.jpg";
import shot3 from "./shot/shot3.jpg";
import shot2 from "./shot/shot2.jpg";
import shot1 from "./shot/shot1.jpg";
import shot0 from "./shot/shot0.jpg";

const img_style = {
  width: "100%",
  height: "100%",
  filter: "brightness(70%)",
  objectFit: "cover",
};

const lobby_style = {
  padding: "0",
  margin: "0",
  position: "absolute",
  height: "100vh",
  width: "100vw",
};

const contact_info = {
  display: "flex",
  width: "100%",
  margin: "auto",
};

const card = {
  background: "rgba(54,54,54,0.8)",
  margin: "0 1vw",
  width: "15vw",
  height: "54vh",
  display: "flex",
  flexDirection: "column",
  borderRadius: "5%",
};

const shot = {
  float: "left",
  width: "15vw",
  height: "30vh",
  borderRadius: "10%",
  objectFit: "cover",
  padding: "2%",
};

const name = {
  maxHeight: "15vh",
  padding: "0",
  margin: "0",
  lineHeight: "10vh",
  fontSize: "150%",
  fontWeight: "normal",
  color: "whitesmoke",
  fontFamily: "fantasy",
};

const icon = {
  maxHeight: "10vh",
  lineHeight: "8vh",
  fontSize: "150%",
  opacity: "70%",
};

function ContactPage() {
  return (
    <>
      <div id="lobby" className="lobby" style={lobby_style}>
        <img style={img_style} src={background} alt="" />
      </div>
      <div
        className="PageInformation"
        style={{
          position: "absolute",
          padding: "0",
          margin: "0 1vw",
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
      <div
        style={{
          position: "absolute",
          top: "28vh",
          left: "7.5vw",
        }}
      >
        <div className="contact-info" style={contact_info}>
          <div className="card" style={card}>
            <img src={shot4} alt="" style={shot} />
            <div style={name}>
              <p>經濟二 黃榆婷</p>
            </div>
            <div style={icon}>
              <a
                id="4_1"
                href="mailto:b10303029@ntu.edu.tw"
                style={{ margin: "0 1vw" }}
              >
                <i
                  className={"fa fa-envelope"}
                  style={{ color: "#ff6348" }}
                ></i>
              </a>
              <a
                id="4_2"
                href="https://github.com/huangfishburger"
                style={{ margin: "0 1vw" }}
                target="_blank"
              >
                <i className="fa fa-link" style={{ color: "#ff6348" }}></i>
              </a>
            </div>
          </div>
          <div className="card" style={card}>
            <img src={shot3} alt="" style={shot} />
            <div style={name}>
              <p>生機四 張熯尹</p>
            </div>
            <div style={icon}>
              <a
                id="4_1"
                href="mailto:b08611038@ntu.edu.tw"
                style={{ margin: "0 1vw" }}
              >
                <i
                  className={"fa fa-envelope"}
                  style={{ color: "#ff6348" }}
                ></i>
              </a>
              <a
                id="4_2"
                href="https://github.com/Smallfu666"
                style={{ margin: "0 1vw" }}
                target="_blank"
              >
                <i className="fa fa-link" style={{ color: "#ff6348" }}></i>
              </a>
            </div>
          </div>
          <div className="card" style={card}>
            <img src={shot0} alt="" style={shot} />
            <div style={name}>
              <p>地理四 顏廷龍</p>
            </div>
            <div style={icon}>
              <a
                id="4_1"
                href="mailto:b08208047@ntu.edu.tw"
                style={{ margin: "0 1vw" }}
              >
                <i
                  className={"fa fa-envelope"}
                  style={{ color: "#ff6348" }}
                ></i>
              </a>
              <a
                id="4_2"
                href="https://github.com/nolonger891204"
                style={{ margin: "0 1vw" }}
                target="_blank"
              >
                <i className="fa fa-link" style={{ color: "#ff6348" }}></i>
              </a>
            </div>
          </div>
          <div className="card" style={card}>
            <img src={shot1} alt="" style={shot} />
            <div style={name}>
              <p>經濟二 林柏呈</p>
            </div>
            <div style={icon}>
              <a
                id="4_1"
                href="mailto:b10303046@ntu.edu.tw"
                style={{ margin: "0 1vw" }}
              >
                <i
                  className={"fa fa-envelope"}
                  style={{ color: "#ff6348" }}
                ></i>
              </a>
              <a
                id="4_2"
                href="https://github.com/kevinsslin"
                style={{ margin: "0 1vw" }}
                target="_blank"
              >
                <i className="fa fa-link" style={{ color: "#ff6348" }}></i>
              </a>
            </div>
          </div>
          <div className="card" style={card}>
            <img src={shot2} alt="" style={shot} />
            <div style={name}>
              <p>國企碩二 黃昕</p>
            </div>
            <div style={icon}>
              <a
                id="4_1"
                href="mailto:r10724039@ntu.edu.tw"
                style={{ margin: "0 1vw" }}
              >
                <i
                  className={"fa fa-envelope"}
                  style={{ color: "#ff6348" }}
                ></i>
              </a>
              <a
                id="4_2"
                href="https://github.com/xinhuang0716"
                style={{ margin: "0 1vw" }}
                target="_blank"
              >
                <i className="fa fa-link" style={{ color: "#ff6348" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ContactPage };
