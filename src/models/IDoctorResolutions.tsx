interface ResolutionPatient {
  first_name: string;
  id: string;
  last_name: string;
  photo: string;
}

export interface Resolution {
  id: string;
  resolution: string;
  appointment_id: string;
  next_appointment_date: string;
  visit_date: string;
  patient: ResolutionPatient;
}

export type IDoctorResolutions = Array<Resolution> | [];
