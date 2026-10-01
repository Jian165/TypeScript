// literail types using string template
//

type Class = "wizard" | "warrior" | "roge";

type Hero = `elf ${Class}`

// Possible Values
type Heros = "elf wizard" | "elf warrior" | "elf rogue";

// Example 2
type Race = "elf" | "human" | "rogue";
type Hero2 =  `Hero: ${Race} ${Class}`
// Hero: elf wizard | Hero: elf warrior | Hero: elf rogue | Hero: human wizard | Hero: human warrior | Hero: human rogue | Hero: dwarf wizard | Hero: dwarf warrior | Hero: dwarf rogue

type LogRecord = `${string}: ${number}`;

// this is valid because it's a string followed by a colon and a number
const criticalErr: LogRecord = "CRITICAL: 69";

// these are all invalid
//
// const criticalErr: LogRecord = "CRITICAL 92";
// const criticalErr: LogRecord = "CRITICAL: 92a";
// const criticalErr: LogRecord = "92: CRITICAL";

// Assignment
export type LogLevel = "info" | "warn" | "error";
export type LogErrror = "User logged In" |"Database Connection Failed" |"Unauthorize User" |"Valid message";;
export type LogMessage = `${LogLevel}: ${LogErrror}`

export type LogSourceType = "api" | "database" | "auth";
export type LogSourceNumber = "404" | "401" | "200" | "123";
export type LogSource = `${LogSourceType}_${LogSourceNumber}`;

export function createLogEntry(message: LogMessage, source: LogSource): string {
  return `[${source}] LOG - ${message}`;
}
 
