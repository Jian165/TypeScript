// Maps
// TypeScript (obviously) also has a built-in for maps, which are collections of key-value pairs. You can specify the types of the keys and values using type parameters <K, V>.


// A Map with string keys and number values
const podracerSpeeds = new Map<string, number>();

podracerSpeeds.set("Anakin Skywalker", 947);
podracerSpeeds.set("Sebulba", 941);

// podracerSpeeds.set("R2-D2", true);
// Error: Argument of type 'true' is not assignable to parameter of type 'number'

// podracerSpeeds.set(420, 69);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'

console.log(podracerSpeeds.size);
// 2

for (const [racer, speed] of podracerSpeeds) {
  console.log(`${racer} raced at ${speed} speed`);
}
// Anakin raced at 947 speed
// Sebulba raced at 941 speed

console.log(podracerSpeeds.get("Sebulba"));
// 941

console.log(podracerSpeeds.has("Sebulba"));
// true

podracerSpeeds.delete("Sebulba");
console.log(podracerSpeeds.get("Sebulba"));
// undefined

//Assignment
export function getFileLength(files: Map<string, string>, filename: string) {
    const file = files.get(filename);
    if(file == null) return 0
    return new TextEncoder().encode(file)
}

