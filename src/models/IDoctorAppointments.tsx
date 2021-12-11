type AppointmentPatient = {
    first_name: String,
    id: string,
    last_name: string,
    photo: string,
};

type Appointment = {
    id: string,
    note: string,
    patient: AppointmentPatient,
    reason: string,
    status: string,
    visit_date: string,
};

export interface IDoctorAppointment {
    appointments: Appointment[]
}