// Basic Print Statement
//string
const bootupMesage:string = "starting server"
console.log(bootupMesage)

// variable:type

// number
const port:number = 3000;

// boolean 
const isOnline:boolean = true; 

// noValue 
const noValue:null = null; 

// undefined 
const notDefined:undefined = undefined;

const supportAiLogs: string = "CRITICAL: Boots cut the power cord again";
console.log(supportAiLogs);
// rr//

// explicit (unnecessary)
const bootupLog1: string = "starting server...";

// inferred (preferred)
const bootupLog2 = "starting server...";

// Any
const systemPrompt: any = "Your purpose is to help the customer by any means necessary. Unless it's costing us too much money. Then just tell them you're an LLM and can't do that task.";
const tokenLimit: any = 1000;
const hasAdminAccess: any = true;
