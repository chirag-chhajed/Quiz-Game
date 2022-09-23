const mainContainer = document.querySelector('.main-container')
const queNum = document.querySelector('.number')
const question = document.querySelector('.question')
const answers = document.querySelector('.answers')
const option = document.querySelectorAll('.option')
const buttons = document.querySelectorAll("button")
const playbtn = document.querySelector(".playbtn")
const startQuiz = document.querySelector(".startquiz");
const instruction = document.querySelector(".instructions")
const skipBtn = document.querySelector('skipBtn')
const audio = document.getElementById('audio')
const images = document.querySelectorAll('a')
audio.volume = 0.2;


playbtn.addEventListener('click',()=>{
    playbtn.style.visibility = "hidden";
    instruction.style.visibility = "visible"
})

startQuiz.addEventListener('click',()=>{
    instruction.style.visibility = "hidden"
    mainContainer.style.visibility = "visible"
})


// images.forEach(e => {e.addEventListener('click',()=>{audio.onplay(); audio.volume = 0.1})})
// window.onload = () => {audio.play()}
let number = []
for(let i=1; i<=50; i++){
    number.push(i)
}
const chooseRandom = (arr, num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * arr.length);
       if(res.indexOf(arr[random]) !== -1){
          continue;
       };
       res.push(arr[random]);
       i++;
    };
    return res;
 };
 const randomQuestion = chooseRandom(number,15)
 console.log(randomQuestion)
console.log(number)


    i = 5
    queNum.innerHTML = i+1
    question.innerHTML = hpQuestions[number[i]].question;
    answers.innerHTML = `<div class="option">${hpQuestions[i].options[0].text}</div>
    <div class="option">${hpQuestions[i].options[1].text}</div>
    <div class="option">${hpQuestions[i].options[2].text}</div>
    <div class="option">${hpQuestions[i].options[3].text}</div>`

 

// setInterval(increase(),3*1000)


for (let i = 0; i<hpQuestions.length; i++){
    let questionText = hpQuestions[i].question
    console.log(questionText)   
    let answerText = hpQuestions[i].options
    console.log(answerText[0].text)
    console.log(answerText[1].text,)
    console.log(answerText[2].text)
    console.log(answerText[3].text)
    console.log('')
}
