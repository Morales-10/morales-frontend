import {Treatment} from "../../treatments/shared/treatment-model";

export interface AppointmentUpdateDto {
  customerId: number;
  employeeId: number;
  date: string;
  treatmentsList: Treatment[];
  appointmentId: number;
}
