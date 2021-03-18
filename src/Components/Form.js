import React from "react";

import "./styles/Form.css";
function Form(props) {
  return (
    <div>
      <form className="main-formulary" onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="topText"
          onChange={props.handleChange}
          placeholder="Top Text"
        />
        <input
          type="text"
          name="bottomText"
          onChange={props.handleChange}
          placeholder="Bottom Text"
        />
        <button className="main-formulary__btn">GEN</button>
      </form>
      <div className="main-meme-maker">
        <picture className="img-container">
          <h1 className="top-text">{props.topText}</h1>
          <h1 className="bottom-text">{props.bottomText}</h1>
          <img
            className="img-container__meme-img"
            src={props.randomImg}
            alt=""
          />
        </picture>
      </div>
    </div>
  );
}
export default Form;
