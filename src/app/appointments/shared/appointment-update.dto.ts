import {AccountDto} from "../../auth/shared/accountDto";
import {Treatment} from "../../treatments/shared/treatment-model";

export interface AppointmentUpdateDto {
  accountList?: AccountDto[];
  treatmentList?: Treatment[];

}
