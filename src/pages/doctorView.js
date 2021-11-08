import React, { useEffect, useState } from "react";
import PatientsList from "../components/PatientsList";

import { usersData } from "../usersData.js";
// IMAGES
import logo from "../media/logo.png";
import avatar from "../media/avatar.png";
import search from "../media/search.svg";
import slider from "../media/sliders-v-alt.svg";

const DoctorView = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(usersData);
  }, []);
  return (
    <div className="container clinicApp">
      <header className="clinicApp__header">
        <img className="clinicApp__logo" src={logo} alt="" />
        <div className="header__logo__wrapper">
          <div className="header__user__name__wrapper">
            <p>Miranda Nelson</p>
            <p>Doctor</p>
          </div>
          <div className="header__user__wrapper">
            <img src={avatar} alt="" />
            <span className="header__user__status"></span>
          </div>
        </div>
      </header>
      <section className="clinicApp__cards__section">
        <div className="clinicApp__nav__buttons">
          <button className="nav__buttons__patients">Patients</button>
          <button className="nav__buttons__resolutions">Resolutions</button>
        </div>
        <div className="clinicApp__section__nav">
        <h3 className="section__nav__title">My Patients</h3>
          <div className="section__nav__items__wrapper">
            <img className="section__nav__search" src={search} alt="" />
            <input type="text" placeholder="Search" className="section__nav__search__input"/>
            <img className="section__nav__select" src={slider} alt="" />
            <span className="section__nav__select__span">Sort by:</span>
            <select className="section__nav__select_tag" name="Date" id="">
              <option>Date</option>
            </select>
          </div>
        </div>
        {users.length > 0 ? (
          <PatientsList users={users} />
        ) : (
          <div className="empty__list">
            <p className="empty__list__text">
              You have no patients yet. To create a patient profile, please
              contact your administrator.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default DoctorView;
