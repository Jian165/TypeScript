// JavaScript is very lenient when it comes to function signatures, and TypeScript gives us a way to take advantage of that flexibility while still maintaining type safety: function overloads.
type Employee = {
  name: string;
  dept: string;
}

// note: function overloads need to be declared above the implementation
function formatEmployeeMessage(employee: Employee): string;

function formatEmployeeMessage(
  employee: Employee,
  isNew?: boolean,
  onBoardedDate?: Date,
): string {
  if (!isNew) {
    return `Employee: ${employee.name}, Dept: ${employee.dept}`;
  }
  return `Employee: ${employee.name}, New: Yes, Onboarded: ${onBoardedDate}`;
}

//Assingment
export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
};

export function configurePreferences(
  doNotDisturb: boolean,
  outOfOffice: boolean ,
): MailPreferences;

export function configurePreferences(
  doNotDisturb: boolean,
  outOfOffice: boolean | string,
  useSystemTheme: boolean,
  theme: string,
): MailPreferences;

// Do not touch below this line

export function configurePreferences(
  doNotDisturb: boolean,
  outOfOffice: boolean | string,
  useSystemTheme?: boolean,
  theme?: string,
): MailPreferences {
  if (typeof outOfOffice === "string") {
    return {
      doNotDisturb: false,
      outOfOffice: false,
      useSystemTheme: doNotDisturb,
      theme: outOfOffice,
    };
  } else if (useSystemTheme !== undefined && theme !== undefined) {
    return {
      doNotDisturb: doNotDisturb,
      outOfOffice: outOfOffice,
      useSystemTheme: useSystemTheme,
      theme: theme,
    };
  } else {
    return {
      doNotDisturb: doNotDisturb,
      outOfOffice: outOfOffice,
    };
  }
}