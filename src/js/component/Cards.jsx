import React from "react";
import Card from "./Card.jsx";

const Cards = () => {
    return(
        <div className="row m-4">
          <Card imgUrl="https://i.ytimg.com/vi/rtQKP1we-Dk/maxresdefault.jpg"/>
          <Card imgUrl="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png"/>
          <Card imgUrl="https://i.imgflip.com/2kuh6f.jpg"/>
        </div>
    );
}

export default Cards;