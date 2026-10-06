// Object Literal Types
// the most useful "upgrade" from JavaScript to TypeScript, it's adding types to objects.

function logSaiyan(saiyan: { name: string; power: number }) {
  console.log(`${saiyan.name} has power level: ${saiyan.power}!`);
  // ...
}

// define the object type first:
type Saiyan = {
  name: string;
  power: number;
};

function logSuperSaiyan(saiyan: Saiyan) {
  console.log(`${saiyan.name} has power level: ${saiyan.power}!`);
  // ...
}

type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
}
export function processMail(mail: Mail) {
  return `FROM: ${mail.from}
TO: ${mail.to}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}