// The readonly modifier is very similar to the const keyword in JavaScript. It's an added feature of TypeScript that lets us mark object properties as read-only,
type Point = {
  readonly x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};

point.y = 30; // OK
//
// Error: Cannot assign to 'x' because it is a read-only property
//point.x = 15;

export type MailPreferences = {
    [key: PropertyKey]: boolean | string;
    readonly doNotDisturb: boolean;
    readonly outOfOffice: boolean;
};