// PropertyKey
// With dynamic property keys we've only used the string type so far, and most of the time, that's all you need. However, JavaScript also supports number and symbols as property keys.
// this is a built-in type
type PropertyKeys = string | number | symbol;

 type InfrastructureTags = {
  [key: PropertyKey]: any;
};

// e can allow number and symbol keys (the JS default) like this:
const janesServer: InfrastructureTags = {
  name: "Jane's Server",
  1: 420,
  [Symbol("role")]: "Admin",
};

export const TWO_FACTOR = Symbol("twoFactor");
export const BIOMETRIC_LOCK = Symbol("biometricLock");

export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [TWO_FACTOR]: boolean;
  [BIOMETRIC_LOCK]: boolean;
};

// don't touch above this line

export function isSecure(preferences: MailPreferences) {
  return preferences[TWO_FACTOR] || preferences[BIOMETRIC_LOCK];
}