//функция принимает 1 арг в виде масива который состоит из обьектов
//вернуть сука тру
// const names = [
//     {name:"matvey",suka:false},
//     {name:"Misha",suka:false},
//     {name:"Oleg",suka:true}
// ]
// const nameSearch = (arg) =>{
//     return arg.filter((suk) => suk.suka)
// }
// console.log(nameSearch(names))



// const persons = [
//     { name: "matvey", suka: true },
//     { name: "Misha", suka: false },
//     { name: "Oleg", suka: true },
//     { name: "matvey", suka: true },
//     { name: "Misha", suka: false },
//     { name: "Oleg", suka: true },
//     { name: "matvey", suka: false, dolbaeb:true},
//     { name: "Misha", suka: false },
//     { name: "Oleg", suka: true },
// ]

// const search = (argument) => {
//     return argument.forEach(element => {
//         console.log(element?.dolbaeb??'huita')
//     });
// }
// search(persons)

    

const huina = [
    { name: "matvey", suka: true },
    { name: "Misha", suka: false, szbolda: true},
    { name: "Oleg", suka: true, xuitaIzPodKonia: true },
    { name: "matvey", suka: true ,dima: false},
    { name: "Misha", suka: false ,igor: 'lox'},
    { name: "Oleg", suka: true },
    { name: "matvey", suka: false, dolbaeb: true, szbolda: true},
    { name: "Misha", suka: false, szbolda228: true },
    { name: "Oleg", suka: true, szbolda: true }
]
// const resp = (arg) =>{
//     return arg.forEach(element => {
//         console.log((element?.xuitaIzPodKonia??element.name)&&(element?.szbolda??element.name))
//     });
// }
// resp(huina)

// const rest = (arg) => {
//     return arg.filter(element => element.name === "Oleg" && element?.xuitaIzPodKonia === true)[0].name
// }
// console.log(rest(huina))
// const mass = [2, 4, 1]

// const rest = (arg) => {
//     return arg.reduce((acc, curVa, index)=>{
//        if(mass.some(massH => index === massH)){
//         return acc = [...acc, curVa]
//        } 
//        else{
//         return acc
//        }
//     },[])
// }
// // const gdflsj = [1, 2, 3]
// // gdflsj.reduce()
// console.log(rest (huina))

//расчитать расход денег на километраж учитывая
//цена топлива, расход,дистанция

const value = (CostFuel, FuelPerKm, distance) => {
    return 'В общем выходит ' + FuelPerKm / 100 * distance * CostFuel + ' гривен'
}
console.log(value(40, 13, 250))