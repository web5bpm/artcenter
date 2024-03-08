const objectNumber = localStorage.getItem("objectNumber");

const headForJs = document.getElementsByClassName('headForJs')[0];
const litleInform = document.getElementsByClassName('litleInform')[0];
const duration = document.getElementsByClassName('duration')[0];
const coverOfCourse = document.getElementsByClassName('coverOfCourse')[0];
const question1 = document.getElementsByClassName('question1')[0];
const answer1 = document.getElementsByClassName('answer1')[0];
const question2 = document.getElementsByClassName('question2')[0];
const answer2 = document.getElementsByClassName('answer2')[0];
const question3 = document.getElementsByClassName('question3')[0];
const answer3 = document.getElementsByClassName('answer3')[0];
const nameRepeat = document.getElementsByClassName('nameRepeat')[0];
const mainIdea = document.getElementsByClassName('mainIdea')[0];
const coverOfIdea = document.getElementsByClassName('coverOfIdea')[0];
const nameRepeatForSign = document.getElementsByClassName('nameRepeatForSign')[0];


headForJs.textContent = listOfCourse[objectNumber].nameOfCourse;
litleInform.textContent = listOfCourse[objectNumber].littleInformAboutCourse;
duration.textContent = listOfCourse[objectNumber].durationOfCourse;
coverOfCourse.src = listOfCourse[objectNumber].coverOfCourse;
question1.textContent = listOfCourse[objectNumber].question1;
answer1.textContent = listOfCourse[objectNumber].answer1;
question2.textContent = listOfCourse[objectNumber].question2;
for (let i = 0; i < listOfCourse[objectNumber].answer2.length; i++) {
    const answer2Child = document.createElement('li');
    answer2Child.textContent = listOfCourse[objectNumber].answer2[i];
    answer2.append(answer2Child);
}
question3.textContent = listOfCourse[objectNumber].question3;
for (let i = 0; i < listOfCourse[objectNumber].answer3.length; i++) {
    const answer3Child = document.createElement('li');
    answer3Child.textContent = listOfCourse[objectNumber].answer3[i];
    answer3.append(answer3Child);
}

nameRepeat.textContent = listOfCourse[objectNumber].nameOfCourse;

for (let i = 0; i < listOfCourse[objectNumber].mainIdea.length; i++) {
    const mainIdeaChild = document.createElement('li');
    mainIdeaChild.textContent = listOfCourse[objectNumber].mainIdea[i];
    mainIdea.append(mainIdeaChild);
}

coverOfIdea.src = listOfCourse[objectNumber].coverOfIdea;
nameRepeatForSign.textContent = listOfCourse[objectNumber].nameOfCourse;


const backgroundImageUp = document.getElementsByClassName('enterence')[0];
const backgroundImageDown = document.getElementsByClassName('proses-child')[0];
if (window.innerWidth < 860) {
    backgroundImageUp.style.backgroundImage = `url(${listOfCourse[objectNumber].coverOfCourse})`;
    backgroundImageUp.style.backgroundSize = "35%";
    backgroundImageUp.style.backgroundPosition = "right center";

    backgroundImageDown.style.backgroundImage = `url(${listOfCourse[objectNumber].coverOfIdea})`;
    backgroundImageDown.style.backgroundSize = "100%";
    backgroundImageDown.style.backgroundPosition = "center";
}

if (window.innerWidth < 475){
    backgroundImageUp.style.backgroundSize = "50%";
    backgroundImageUp.style.backgroundPosition = "center 67%";
}