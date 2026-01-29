// write a function that recieve marks as an argument and return small element from the array

let marks=[90,50,27,50,20]
function smallest(marks){
    let small=marks[0]
    for(let m of marks){
        if(m<small){
            small=m
        }
    }
    return small
}
let sm=smallest(marks)
console.log(sm)

// write a function that recieve skill  and skill name as an argument and return index of skillname if existed
let skills=["html","css","js","react","nodejs"]
function findskill(skill,skillname)
{
    if(skillname in skills)
    {
        console.log(skills[skillname])
    }
    else{
        console.log("not existed")
    }
}
findskill(skills,skills[3]) 