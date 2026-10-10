// Sets
// TypeScript has a built-in type for sets, which are collections of unique values. You can ensure that all the values in the set are of the same type by specifying a type parameter: <T>

// A Set that contains only strings
const justiceLeague = new Set<string>();

justiceLeague.add("Green Arrow");
justiceLeague.add("Flash");

// Error: Argument of type '2' is not assignable to parameter of type 'string'
// justiceLeague.add(2);

// A Set automatically removes duplicate values from an array
const names = ["plasticman", "firestorm", "plasticman"];
const justiceLeagues = new Set<string>(names);

console.log(justiceLeagues);
// Set { 'plasticman', 'firestorm' }

// Assigments
export function findNumUniqueLabels(formattedAddresses: string[]) {
    const set = new Set(formattedAddresses)
  return set.size;
}
