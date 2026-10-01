
// userId is a string OR a number
let userId: string | number;
userId = "user_42";
userId =  42;

// Usecase
function safeSquare(val: string|number): number{
  if(typeof val === "string"){
    val = parseInt(val,10);
  }
  return val * val;
}

let result =  safeSquare("5");
console.log(result);

result = safeSquare(5);
console.log(result)

//assingment
export function getTicketInfo(id:string|number) :string {
  if(typeof id === "string"){
    id = parseInt(id.split("-")[1],10)
  }
  return `Processing ticket: ${id}`
}
