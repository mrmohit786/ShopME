import React from "react";
import { API } from "../../backend";
const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80";
  return (
    <div className="">
      <img
        src={imageUrl}
        style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
        className="mb-2"
      />
    </div>
  );
};

export default ImageHelper;
