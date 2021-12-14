interface AppointmentPatient  {
    first_name: string,
    id: string,
    last_name: string,
    photo: string,
};

export interface Appointment {
    id: string,
    note: string,
    patient: AppointmentPatient,
    reason: string,
    status: string,
    visit_date: string,
};

export type IDoctorAppointment = Array<Appointment> | []