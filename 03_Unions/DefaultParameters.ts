// Default parameters provide fallback values for arguments that callers can omit.
function newCharacter (name:string, role:string = "warrior") : string {
  return `${name} is a ${role}`
}
console.log(newCharacter("Gandalf"))
console.log(newCharacter("Gandalf","wizard"))


// When using a default value, the parameter type can be automatically inferred, so don't specify it:
function countdown(start = 10): void{
  console.log(`Counting down from ${start}... `)
}

//Assingment
export function estimateResponseTime(promntLenth = 100, modelType = "text") {
  switch(modelType){
    case "text":
        return Math.round(2 + (0.01*promntLenth))
    case "image":
        return Math.round(5 + (0.02*promntLenth))
    case "code":
       return Math.round( 3 + (0.05*promntLenth))
    default:
      return 0;
  }
}
