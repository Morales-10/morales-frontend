import {DurationModel} from "../../treatments/shared/duration-model";
import {Treatment} from "../../treatments/shared/treatment-model";

export interface Appointment {

  id: number;
  customerId: number;
  customerName: string;
  employeeid: number;
  employeeName: string;
  date: string;
  duration: DurationModel;
  treatmentsList: Treatment[];
  totalPrice: number;
  appointmentEnd: string;
}
