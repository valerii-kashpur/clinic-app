import React, { useEffect, useState } from 'react';
import AppoinmentsList from '../components/AppoinmentsList';
import {appointmentsData} from "../appointmentsData.js";
// IMAGES
import logo from "../media/logo.png";
import avatar from "../media/avatar.png";
import slider from "../media/sliders-v-alt.svg";


const PatientView = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        setAppointments(appointmentsData)
      },[]);

    return (
        <div className="container clinicApp">
        <header className="clinicApp__header">
          <img className="clinicApp__logo" src={logo} alt="" />
          <div className="header__logo__wrapper">
            <div className="header__user__name__wrapper">
              <p>Larry Primston</p>
              <p>Patient</p>
            </div>
            <div className="header__user__wrapper">
              <img src={avatar} alt="" />
              <span className="header__user__status"></span>
            </div>
          </div>
        </header>
        <section className="clinicApp__cards__section">
          <div className="clinicApp__nav__buttons">
            <button className="nav__buttons__profile">Profile</button>
            <button className="nav__buttons__appointment">Appointments</button>
            <button className="nav__buttons__resolutions">resolutions</button>
          </div>
          <div className="clinicApp__section__nav">
            <h3 className="section__nav__title">My Appointments</h3>
            <div className="section__nav__items__wrapper">
              <img className="section__nav__select" src={slider} alt="" />
              <span className="section__nav__select_span">Show:</span>
              <section className="section__nav__select_desctop">
                <option value="">Upcoming</option>
              </section>
              <button className="section__nav__create">+ create an uppointment</button>
            </div>
          </div>
          {appointments.length > 0 ? (
          <AppoinmentsList appointments={appointments} />
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

export default PatientView;