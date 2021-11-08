import React from "react";
import { Link } from "react-router-dom";

const RestorePassAside = ({ title, children }) => {
  return (
    <div className="container aside__restorePassword">
      <aside className="aside restorePass">
        <div className="aside__wrapper">
          <div className="aside__title_wrapper">
            <Link className="aside__title__angle" to="/sign-in"></Link>
            <h2 className="aside__title restorePass">{title}</h2>
          </div>
          {children}
        </div>
      </aside>
    </div>
  );
};

export default RestorePassAside;
