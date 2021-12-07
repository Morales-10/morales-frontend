import {DurationModel} from "../../treatments/shared/duration-model";
import {Treatment} from "../../treatments/shared/treatment-model";

export interface AppointmentModel {
  id: number;
  cutomerId: number;
  customerName: string;
  employeeId: number;
  employeeName: string;
  date: string;
  duration: DurationModel;
  treatmentsList: Treatment[];
  totalPrice: number;
  appointmentEnd: string;
}
