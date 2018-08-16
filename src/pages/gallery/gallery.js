import React from "react";
import LoadableVisibility from "react-loadable-visibility/react-loadable";

import Image from "../../components/image";
import placeholder300x300 from "../../assets/images/placeholder-300x300.png";
import placeholder768x300 from "../../assets/images/placeholder-768x300.png";
import placeholder1024x200 from "../../assets/images/placeholder-1024x200.png";

const LoadedImage = LoadableVisibility({
  loader: () => import("../../components/image"),
  loading: () => {
    return <div className="gallery__image--loading"><h3>Loading...</h3></div>;
  },
});

class PageGallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <div className="gallery__intro">
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="gallery__grid">
          <Image
            mobile={placeholder768x300}
            tablet={placeholder1024x200}
            desktop={placeholder300x300}
            alt="Placeholder" />
          <Image
            mobile={placeholder768x300}
            tablet={placeholder1024x200}
            desktop={placeholder300x300}
            alt="Placeholder" />
          <Image
            mobile={placeholder768x300}
            tablet={placeholder1024x200}
            desktop={placeholder300x300}
            alt="Placeholder" />
          <LoadedImage
            mobile={placeholder768x300}
            tablet={placeholder1024x200}
            desktop={placeholder300x300}
            alt="Placeholder" />
          <LoadedImage
            mobile={placeholder768x300}
            tablet={placeholder1024x200}
            desktop={placeholder300x300}
            alt="Placeholder" />
          <LoadedImage 
            mobile={placeholder768x300}
            tablet={placeholder1024x200}
            desktop={placeholder300x300}
            alt="Placeholder" />
          <LoadedImage
            mobile={placeholder768x300}
            tablet={placeholder1024x200}
            desktop={placeholder300x300}
            alt="Placeholder" />
          <LoadedImage
            mobile={placeholder768x300}
            tablet={placeholder1024x200}
            desktop={placeholder300x300}
            alt="Placeholder" />
        </div>
      </div>
    );
  }
}

export default PageGallery;
