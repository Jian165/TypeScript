// Dynamic Keys
// Sometimes, you won't know all of an object's property names in advance. For example, say you're building a customer management system where employees can add custom key/value pairs to customer records:
// - favoriteColor: "blue"
// - favoriteFood: "pizza"
// - favoriteAnimal: "cat"
// - etc

type UserMetrics = {
  [key: string]: number;
};
const metrics: UserMetrics = {
  wordsPerMinute: 50,
  errors: 2,
  timeOnPage: 120,
};

metrics["refreshRate"] = 60; // OK
// metrics["theme"] = "dark"; 
// Error: Type 'string' is not assignable to type 'number'

// Assignment
export type MailPreferences = {
    [key:string]:boolean
};

// don't touch below this line

export function setPreference(
  preferences: MailPreferences,
  key: string,
  value: boolean,
) {
  const exists = key in preferences;
  preferences[key] = value;
  return exists;
}

