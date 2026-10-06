// TypeScript infers the type as (string|number) []
let lightsableStyles =  [1,2,"double","shoto"]

function describe(style: string | number): string{
    console.log(`Wield ${style} lighsable`)
    return `Wield ${style} lighsable`
}

lightsableStyles.map(describe)


export function interpolateCommend (
    id:number,
    comment: string,
    comments: (string | number)[],
){
    const index = comments.findIndex(c => c ===id) 
    if(index === -1) return;
    comments[index] = comment 
}
