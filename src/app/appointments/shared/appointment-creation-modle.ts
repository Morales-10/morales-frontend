import {Treatment} from "../../treatments/shared/treatment-model";

export interface AppointmentCreationModle {
  cutomerId: number;
  employeeId: number;
  date: string;
  treatmentsList: Treatment[];
}
