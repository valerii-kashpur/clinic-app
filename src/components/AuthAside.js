import React from "react";

const AuthAside = ({ containerClass, asideClass, title, children }) => {
  return (
    <div className={`container ${containerClass}`}>
      <aside className={`aside ${asideClass}`}>
        <div className="aside__wrapper">
          <h2 className="aside__title">{title}</h2>
          {children}
        </div>
      </aside>
    </div>
  );
};

export default AuthAside;
