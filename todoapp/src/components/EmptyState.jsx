import React from "react";
import emptyImg from "/public/images/opps.png"; // Or the new image you uploaded

export default function EmptyState() {
  return (
    <div className="empty-container">
      <img src={emptyImg} alt="No tasks" className="empty-img" />
      <div className="empty-text">
        you haven’t added your Wishlist yet..<span className="opps">!!</span>
      </div>
    </div>
  );
}
