// The as const assertion creates a readonly type using literal values:
const colorsConst = ["red", "green", "blue"] as const;

// Error: Property 'push' does not exist on type 'readonly ["red", "green", "blue"]'
// colorsConst.push("yellow");

const configConst = {
  apiUrl: "https://api.cobrakai.com",
  admins: {
    johnny: "lawrence",
    daniel: "larusso",
  },
  features: ["no mercy", "not crying", "winning too much"],
} as const;

// Error: Cannot assign to 'apiUrl' because it is a read-only property
// configConst.apiUrl = "https://api.karate.com";

// Error: Cannot assign to 'johnny' because it is a read-only property
// configConst.admins.johnny = "larusso";

// Error: Property 'push' does not exist on type 'readonly ["no mercy", "not crying", "winning too much"]'
// configConst.features.push("sweep the leg");

const frozenConfig = Object.freeze({
  apiUrl: "https://api.cobrakai.com",
  admins: {
    johnny: "lawrence",
    daniel: "larusso",
  },
  features: ["no mercy", "not crying", "winning too much"],
});

// Error: Cannot assign to 'apiUrl' because it is a read-only property
// frozenConfig.apiUrl = "https://api.karate.com";

// This is fine because nested properties are not frozen automatically
frozenConfig.admins.johnny = "kreese";

// This is also fine because the array is not frozen
frozenConfig.features.push("sweep the leg");


export const defaultPreferences = Object.freeze({
  name: "Kreese",
  doNotDisturb: false,
  outOfOffice: false,
});


