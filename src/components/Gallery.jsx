import React from "react";
import GalleryFirstRow from "./GalleryFirstRow";
import GallerySecondRow from "./GallerySecondRow";

function Gallery() {
  return (
    <div id="gallery">
      <div className="flex items-center justify-center text-4xl font-bold pt-16 pb-8 border-t-2">
        GALLERY
      </div>
      <GalleryFirstRow />
      {/* <div className="border-b-2"></div> */}
      <GallerySecondRow />
     
    </div>
  );
}

export default Gallery;
