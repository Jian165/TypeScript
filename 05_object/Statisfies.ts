// The satisfies operator validates that a value matches a specific type without changing its inferred type. It solves a common pain point in TypeScript's type system. Before satisfies, you often had to choose between:

// Letting TypeScript infer types (good for flexibility, but might miss errors)
// Using explicit type annotations (good for catching errors, but loses narrowed type information)

type ColorMap = {
  red: string | number;
  green: string | number;
  blue: string | number;
  yellow: string | number;
};

const colorsSatisfies = {
  red: "#ff0000",
  green: "#00ff00",
  blue: 255,
  yellow: "#ffff00",
  // Error: "yelow" is not in type ColorMap
  // yelow: "#ffff00"
} satisfies ColorMap;

// We keep the narrowed types!
type RedHexSatisfies = typeof colorsSatisfies.red;
const redUpper = colorsSatisfies.red.toUpperCase(); // "#FF0000"


export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
};

// don't touch above this line
export const newMailPreferences = {
  signature: "Boots, Support.ai Wizard Bear",
  theme: "dark",
  doNotDisturb: false,
  outOfOffice: false,
} satisfies MailPreferences;