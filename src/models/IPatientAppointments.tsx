
export interface IPatientAppointment {
    appointments: Appointment[]
}

type AppointmentDoctor = {
    first_name: String,
    id: string,
    last_name: string,
    photo: string,
    specialization_name: string
};

type Appointment = {
    doctor: AppointmentDoctor,
    doctor_id: string,
    id: string,
    note: string,
    patient_id: string,
    reason: string,
    status: string,
    visit_date: string,
};

export type AppointmentsListTypes = {
    appointments: Appointment[],
};