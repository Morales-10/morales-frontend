import {DurationModel} from "./duration-model";

export interface Treatment {

  id: number;
  name: string;
  duration: DurationModel;
  price: string;
}
