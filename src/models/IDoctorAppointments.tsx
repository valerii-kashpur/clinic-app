interface AppointmentPatient  {
    first_name: String,
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

export interface IDoctorAppointment {
    appointments: Array<Appointment> | []
}