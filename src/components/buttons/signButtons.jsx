import React from "react";

export default function Button({ title, className, handleSignIn }) {
  return (
    <div>
      <button
        className={`blue-button ${className}`}
        onClick={handleSignIn ? handleSignIn : null}
      >
        {title}
      </button>
    </div>
  );
}
