// Giant Unions
type Distance = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Class =
  | "Warrior"
  | "Rogue"
  | "Mage"
  | "Cleric"
  | "Paladin"
  | "Druid"
  | "Hunter"
  | "Shaman";
type MoveMessage =
  `The ${Class} moves ${Distance}, ${Distance}, ${Distance}, ${Distance}, then ${Distance} spaces.`;

const message: MoveMessage = "The Warrior moves 6, 2, 5, 4, then 7 spaces.";

// There's a good chance you'll run into an error like this:
// Error: Union type too complex to represent.
// This happens because we've tried to create an explicit union of types that has exploded in size. There are hundreds of thousands of possible combinations in the type above. Even if we remove a couple of the Distance values:
