import {Treatment} from "../../treatments/shared/treatment-model";

export interface AppointmentCreationModle {
  customerId: number;
  employeeId: number;
  date: string;
  treatmentsList: Treatment[];
}
