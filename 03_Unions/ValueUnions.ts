// literal type
function move(directions: "north"){}

// union type
function move(directions: "north"|"south"|"west"|"east"){}


// union type and new type
type Direction = "north" | "south" | "east" | "west"
function move(direction:Direction){}

// Assignment
export type Priority = "low" | "medium" | "high" | "critical"
export function setPriority(level: Priority) {
  switch(level){
    case "low":
      return 0 ;
    case "medium":
      return 1;
    case "high":
      return 2
    case "critical":
      return 3
    default:
      return 0;
  }
}
