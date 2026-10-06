// Empty Object Type
// Say I innocently create a new empty object:
let newUser = {}

// Property 'name' does not exist on type '{}'
// newUser.name = "Lane";

// It makes sense, we never told TypeScript which properties to allow... 
// but here's what's really crazy: this is actually allowed:
newUser = "Lane";

type User = {
  name: string;
};

let newUsers: User = {
  name: "Lane",
};

// Assingment
export type Address = {
    domain:string;
    name:string;
};

// don't touch below this line

export type Mail = {
  from: Address;
  to: Address[];
  subject: string;
  body: string;
  urgent: boolean;
  cc?: Address[];
  name:string,
};

export function processMail(mail: Mail) {
  let addressees = "";
  for (const addressee of mail.to) {
    addressees += `${addressee.name}@${addressee.domain}, `;
  }
  addressees = addressees.slice(0, -2);

  let copies = "";
  if (mail.cc) {
    copies = "\nCC: ";
    for (const addressee of mail.cc) {
      copies += `${addressee.name}@${addressee.domain}, `;
    }
    copies = copies.slice(0, -2);
  }

  return `FROM: ${mail.from.name}@${mail.from.domain}
TO: ${addressees}${copies}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}