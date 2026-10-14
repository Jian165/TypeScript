// Dynamic Default Properties
type FormData1 = {
  [field: string]: string;
  email: string;
  password: string;
};
// The object must have an email and password property, and it can have any number of additional string properties.

type FormData2 = {
  [field: string]: string | number | boolean;
  email: string;
  password: string;
  age: number;
};
// The object must have an email (string), password (string), and age (number) property, but it can have any number of additional string, number, or boolean properties.

// Assingment
export type MailPreferences = {
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [key:string]: string | boolean
};
// don't touch below this line
export function canContact(preferences: MailPreferences): boolean {
  return !(preferences.doNotDisturb || preferences.outOfOffice);
}