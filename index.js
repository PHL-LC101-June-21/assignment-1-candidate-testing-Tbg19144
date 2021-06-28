// hope this works for you. I think I deleted something from the original. But I have played with this several times without issue. So fingers crossed it works for you!!! 

const input=require('readline-sync')
const candidateName=input.question ("Candidate Name:  ")

let numberOfCorrectAnswers=0
const cA="Correct Answer: "
let yA="Your Answer: "
let answer1=input.question (`1) Who was the first American woman in space?\n${yA}`);
console.log(`${cA}Sally Ride`)
console.log(" ")

if (answer1==="Sally Ride"||answer1==="sally ride"){
  ++numberOfCorrectAnswers
}


let answer2=input.question(`2) True or False: 5000 meters=5 kilometers?\n${yA}`)
console.log(`${cA}True`)
console.log(" ")

if(answer2==="True"||answer2==="true"){
  ++numberOfCorrectAnswers
}


let answer3=input.question(`3) (5+3)/2*10=?\n${yA}`)
console.log(`${cA}40`)
console.log(" ")

if(answer3=="40"){
  ++numberOfCorrectAnswers
}

let answer4=input.question(`4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?\n${yA}`)
console.log(`${cA}Trajectory`);
console.log(" ")

if (answer4==="trajectory"||answer4==="Trajectory"){
  ++numberOfCorrectAnswers
}

let answer5=input.question(`5) What is the minimum crew size for the ISS\n${yA}`);
console.log(`${cA}3`)
console.log(" ")

if (answer5=="3"){
  ++numberOfCorrectAnswers
}


let grade=(numberOfCorrectAnswers/5)*100
console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers++} of 5 responses correct) <<<`)

if(grade>=80){
 console.log(`>>> Status: PASSED <<<`)
}else{
  console.log(`>>> Status: FAILED <<<`)
}







