// Discriminated Unions
//
// A union of two primitive types, like string | number, is really simple: it's a string or a number. 
// The same is true of object types, but it can be tricky to know which type you're dealing with.
//  That's where "discriminant properties" (or "tags") come in handy.

type MultipleChoiceLesson = {
  kind: "multiple-choice"; // Discriminant property
  question: string;
  studentAnswer: string;
  correctAnswer: string;
};

type CodingLesson = {
  kind: "coding"; // Discriminant property
  studentCode: string;
  solutionCode: string;
};

type Lesson = MultipleChoiceLesson | CodingLesson;

function isCorrect(lesson: Lesson): boolean {
  switch (lesson.kind) {
    case "multiple-choice":
      return lesson.studentAnswer === lesson.correctAnswer;
    case "coding":
      return lesson.studentCode === lesson.solutionCode;
  }
}


// ?
type InternalAddress = {
    kind:"internal"
    firstName:string;
    lastName:string;
}

type ExternalAddress = {
    kind:"external"
    username:string;
    domain:string;
}

// don't touch below this line
export type Address = InternalAddress | ExternalAddress;

export function formatAddresses(addresses: Address[]) {
  let formatted = "";
  for (const address of addresses) {
    if (address.kind === "internal") {
      formatted += `${address.firstName}.${address.lastName}@support.ai, `;
    }
    if (address.kind === "external") {
      formatted += `${address.username}@${address.domain}, `;
    }
  }
  return formatted.slice(0, -2);
}