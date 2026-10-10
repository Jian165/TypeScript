// Extra Properties
type Spaceship = {
  name: string;
  speed: number;
};

// we make an object with one extra property:
const falcon = {
  name: "Millennium Falcon",
  speed: 75,
  weapons: 4,
};

// We can pass this object to a function that expects a Spaceship:
function pilot(ship: Spaceship) {
  console.log(`Piloting ${ship.name} at ${ship.speed} light-years per hour`);
}

// this is fine
pilot(falcon);

// Error: Object literal may only specify known properties, and 'weapons' does not exist in type 'Spaceship'.
// -> pilot({ name: "Millennium Falcon", speed: 75, weapons: 4 });

// Assingment
export type Mail = {
  from: string;
  to: string[];
  cc: string[];
  subject: string;
  body: string;
  urgent: boolean;
};

// don't touch below this line
export function processMail(mail: Mail) {
  return `FROM: ${mail.from}
TO: ${mail.to}${!mail.cc ? "" : "\nCC: " + mail.cc}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}