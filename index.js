const changes = [
  "Количество смен (День)",
  "Количество смен (Ночь)",
  "Работа за (День)",
  "Работа за (Ночь)",
  "Общее количество смен",
];
const enumChanges = {
  morning: "(День)",
  night: "(Ночь)",
};

const changesFilter = (arg1, arg2) => {
    return arg2.filter((element)=>element.includes(enumChanges[arg1]) )
};

console.log(changesFilter('night', changes))





// const lineContainsChanges = (string) =>{
//     if(!string.includes('(')) return false
// }