import React from 'react';
import { v4 as uuidv4 } from "uuid";
// MEDIA
import avatar from "../media/ZaharyAvatar.png";
import moreVertical from "../media/more-vertical.svg";

const AppoinmentsList = ({appointments}) => {
    return (
<ul className="clinicApp__patients__list">
      {appointments.map((user) => (
        <li key={uuidv4()} className="patients__list__item">
          <div className="list__item__patientInfo__wrapper">
            <img className="list__item__patient__img" src={avatar} alt="" />
            <div className="">
              <p className="patientInfo__status__name">{user.name}</p>
              <div className="patientInfo__status__wrapper">
                <p className="patientInfo__AppointmentInfo">
                  {user.profession}
                </p>
              </div>
            </div>
            <img
              src={moreVertical}
              alt=""
              className="list__item__patientInfo__more"
            />
          </div>
          <p className="list__item__time">{user.time}</p>
          <p className="list__item__description">{user.description}</p>
        </li>
      ))}
    </ul>
    );
};

export default AppoinmentsList;