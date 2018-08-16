import React from "react";

const Image = (props) => {
  return (
    <div className="image">
      <picture>
        <source srcSet={props.desktop} media="(min-width: 1024px)" />
        <source srcSet={props.tablet} media="(min-width: 768px)" />
        <img src={props.mobile} alt={props.alt} />
      </picture>
    </div>
  );
};

export default Image;
