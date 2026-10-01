function createMessages (name:string, a:number,b:number):string{
    return `${name} scored ${a+b}`
}

const createMessag  = (name:string, a:number,b:number):string =>{
    return `${name} scored ${a+b}`
}

export function calculateTotal(price: number,quantity: number,discount: number,): number {
  return price * quantity * (1 - discount);
}
// 
// Infered Return types
//
// explicit return type
function divide(a: number, b: number): number {
  return a / b;
}

// infered return type
function divide1(a: number, b: number) {
  return a / b;
}

// void function
function logMesage(message:string):void{
  console.log(message)
}

// function types
const add = (a:number,b:number) => a+b;
const subtract = (a:number,b:number) => a-b;

// Type Alias
function setLoggerTimeout(loggerCallback:(s1:string,s2:string) => string,delay:number){
}

type LoggerCallback = (s1:string,s2:string) => string;
function setLoggerTimeouts(loggerCallback:LoggerCallback,delay:number){
}

export type SupportResponse  = (name:string) => string;

export function greetCustomer(supportRespose:SupportResponse, age: number) {
  return `Hello ${supportRespose("Mark")}, welcome to Support.ai! How can I assist you today?`;
}

export function farewellCustomer(supportRespose:SupportResponse): string {
  return `Goodbye ${supportRespose("Mark")}, have a great day!`;
}
