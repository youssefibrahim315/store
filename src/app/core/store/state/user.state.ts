import { user } from "src/app/modules/customers/models/user.interface";

let userState: user = {
  Id: '',
  Name: '',
  Email: '',
  Phone: '',
  Address: ''
};

export const userInitialState: user = userState;
