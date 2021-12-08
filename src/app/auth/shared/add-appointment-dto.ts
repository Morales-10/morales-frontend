import {Treatment} from "../../treatments/shared/treatment-model";

export interface AddAppointmentDto {
  Customerid: number
  Employeeid: number
  Date: string
  TreatmentsList: Treatment[]
}
