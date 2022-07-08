import React from "react";
import ReactDOM from "react-dom";
const image = "https://picsum.photos/seed/picsum/200/300";
ReactDOM.render(
  <div>
    <h1 className="header" contentEditable="false" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img src={image + "?grayscale"} alt="" />
      <img
        src="https://www.tastingtable.com/img/gallery/mexican-kale-salad-recipe/intro-1647872367.webp"
        alt=""
      />
      <img
        src="https://www.tastingtable.com/img/gallery/mexican-kale-salad-recipe/gather-the-ingredients-for-mexican-kale-salad-1647872367.webp"
        alt=""
      />
      <img
        src="https://www.tastingtable.com/img/gallery/mexican-kale-salad-recipe/assemble-the-salad-and-make-the-dressing-1647872367.webp"
        alt=""
      />
    </div>
  </div>,
  document.getElementById("root")
);
