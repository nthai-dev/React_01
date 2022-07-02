import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="item">
      <img className="thumbnail" src={props.url} alt="#" />
      <div className="info">
        <img className="avatar" src={props.authorImage} alt="#" />
        <div className="text-container">
          <h3 className="title">{props.title}</h3>
          <h5 className="author"> {props.author}</h5>
        </div>
      </div>
    </div>
  );
}

export default Item;
