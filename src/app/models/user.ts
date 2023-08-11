import AccessPermission from "./access-permission";

export interface User {
   userName : string;
   userId? : string
   shoppingCartID?: string;
   password : string;
   email : string;
   accessPermission : AccessPermission;
   phoneNumber? : string;
   address?: string ;
   fullName? : string ;

}




