let inventory = []
// inventory : any[]

inventory.push(42)
// inventory: number[]
//
inventory.push("robe")
// inventory: (number|string)[]

// Assingment
export function collectSupportData(id:number, resolove: boolean){
    const supportData = []
    supportData.push("Support session started")
    supportData.push(id)
    supportData.push(resolove)
    return supportData
}