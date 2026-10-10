// Optional Object Properties
// Optional properties can be added to an object type with the ? operator:

type Superhero = {
  name: string;
  strength: number;
  cape?: boolean; // cape is optional
};

function fight(superhero: Superhero) {
  if (!superhero.cape) {
    // contact edna mode
  }
  // do the happy path thing
}


export type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
  cc?: string[];
};

// don't touch below this line

export function processMail(mail: Mail) {
  return `FROM: ${mail.from}
TO: ${mail.to}${!mail.cc ? "" : "\nCC: " + mail.cc}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}