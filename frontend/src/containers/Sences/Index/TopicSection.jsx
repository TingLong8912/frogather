import React from "react";
import "./TopicSection.css";

function ExtractImageName(address) {
  console.log(address.split("/").slice(-1));
  return address.split("/").slice(-1);
}

function Section({ title, subtilte, desc, bulletin, imageset }) {
  let path;
  if (imageset == 1) {
    path = ["1.jpg", "4.jpg", "9.jpg", "6.jpg"];
  } else if (imageset == 2) {
    path = ["0.jpg", "7.jpg", "2.jpg", "8.jpg"];
  } else {
    path = ["3.jpg", "10.jpg", "5.jpg", "11.jpg"];
  }
  return (
    <>
      <a href="#lobby">
        <button className="btn">
          <i className="fa fa-home"></i>
        </button>
      </a>
      <div className="ImgGrid">
        <div id="cover">
          <img src={require(`./pic/${ExtractImageName(path[0])}`)} alt="" />
          <img src={require(`./pic/${ExtractImageName(path[1])}`)} alt="" />
          <img src={require(`./pic/${ExtractImageName(path[2])}`)} alt="" />
          <img src={require(`./pic/${ExtractImageName(path[3])}`)} alt="" />
        </div>
      </div>
      <div
        className="SectionTitle"
        style={{
          margin: "auto",
          width: "30%",
          padding: "0% 5% 0% 5%",
        }}
      >
        <p style={{ fontSize: "50px", fontWeight: "900" }}>{title}</p>
      </div>
      <div className="SectionText">
        <p
          style={{
            lineHeight: "10px",
            fontSize: "25px",
            color: "WhiteSmoke",
            fontWeight: "30px",
            textDecoration: "underline",
          }}
        >
          {subtilte}
        </p>
        <p
          style={{
            fontSize: "18px",
            color: "WhiteSmoke",
            letterSpacing: "0.1vw",
            lineHeight: "5vh",
            textAlign: "justify",
          }}
        >
          {desc}
        </p>
      </div>
      <div className="SectionBulletin 1" style={{ top: "70%" }}>
        <a id="1" href="">
          <i className={bulletin.icon[0]} aria-hidden="true"></i>
          {bulletin.event[0]}
        </a>
      </div>
      <div className="SectionBulletin 2" style={{ top: "76%" }}>
        <a id="2" href="">
          <i className={bulletin.icon[1]} aria-hidden="true"></i>
          {bulletin.event[1]}
        </a>
      </div>
      <div className="SectionBulletin 3" style={{ top: "82%" }}>
        <a id="3" href="">
          <i className={bulletin.icon[2]} aria-hidden="true"></i>
          {bulletin.event[2]}
        </a>
      </div>
    </>
  );
}

export default Section;
