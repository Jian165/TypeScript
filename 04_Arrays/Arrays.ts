
function trainJed(jedKinghts:string[]){
  for(let kinght of jedKinghts){
    console.log(`Training ${kinght}...`)
  }
}
trainJed(["Dooku","Qui-Gon","Xanatos"])

export function averageScore(ratings: number[]) {

  const arrayLength = ratings.length;

  if(arrayLength <=0 ){return 0}

  let totalRating:number = 0;

  for(let rate of ratings){
    totalRating += rate;
  }
  return totalRating 
}
