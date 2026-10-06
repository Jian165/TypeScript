function gatherParty(partyName:string, ...adventurers:string[]){
    return `${partyName} consists of ${adventurers.join(", ")}`;
}

const msg = gatherParty("The Fellowship","frodo","Sam","Gandalf");
console.log(msg)

// Assingment
export function formatLabels(...labels:string[]){
    switch(labels.length){
        case 0 : return "No Labels"
        case 1 : return `Label: ${labels[0]}`
        default: `Labels: ${labels.join(", ")}`
    }
}