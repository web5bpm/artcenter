const carouselSlide = document.getElementsByClassName('carousel slide')[0];

const carouselIndicators = document.createElement('div');
carouselIndicators.className = "carousel-indicators";

const carouselInner = document.createElement('div');
carouselInner.className = "carousel-inner";


for (let i = 0; i < listOfCorosel.length; i++) {
    const indicatorsButtons = document.createElement('button');
    indicatorsButtons.setAttribute("aria-label", "Slide " + (i + 1));
    indicatorsButtons.setAttribute("type", "button");
    indicatorsButtons.setAttribute("data-bs-target", "#carouselExampleCaptions");
    indicatorsButtons.setAttribute("data-bs-slide-to", i);

    const carouselItem = document.createElement('div');
    carouselItem.setAttribute("class", "carousel-item");

    const carouselItemImage = document.createElement("img");
    carouselItemImage.setAttribute("src", listOfCorosel[i].coroselCover);
    carouselItemImage.setAttribute("class", "d-block w-100");
    carouselItemImage.setAttribute("alt", "no photo");

    const carouselItemText = document.createElement('div');
    carouselItemText.className = "carousel-caption d-none d-md-block";

    const carouselItemTextH5 = document.createElement('h5');
    carouselItemTextH5.textContent = listOfCorosel[i].coroselHead;

    const carouselItemTextP = document.createElement('p');
    carouselItemTextP.textContent = listOfCorosel[i].coroselParagraf;
    carouselItemTextP.style.textDecoration = "underline";
    carouselItemTextP.style.cursor = "pointer";

    if (i === 0) {
        indicatorsButtons.setAttribute("aria-current", "true");
        indicatorsButtons.setAttribute("class", "active");

        carouselItem.classList = "carousel-item active";
    }

    carouselIndicators.append(indicatorsButtons);

    carouselItemText.append(carouselItemTextH5, carouselItemTextP);
    carouselItem.append(carouselItemImage, carouselItemText);
    carouselInner.append(carouselItem)
}

carouselSlide.append(carouselIndicators, carouselInner);



// CAROSEL DƏN DİGƏR SƏHİFƏYƏ GÖNDƏRMƏ

carouselSlide.addEventListener('click', (e) => {
    if (e.target.previousElementSibling.textContent === listOfCorosel[0].coroselHead) {
        localStorage.setItem("objectNumber", 0);
        window.location = "profession.html";
    }
    else if (e.target.previousElementSibling.textContent === listOfCorosel[1].coroselHead) {
        localStorage.setItem("objectNumber", 1);
        window.location = "profession.html";
    }
    else if (e.target.previousElementSibling.textContent === listOfCorosel[2].coroselHead) {
        localStorage.setItem("objectNumber", 2);
        window.location = "profession.html";
    }
    else if (e.target.previousElementSibling.textContent === listOfCorosel[3].coroselHead) {
        localStorage.setItem("objectNumber", 3);
        window.location = "profession.html";
    }
})




const students = document.getElementsByClassName('students')[0];
const studentsChild = document.createElement('div');
for (let i = 0; i < listOfStudents.length; i++) {
    const studentsChildElements = document.createElement('div');
    const studentsChildElementsOfNJ = document.createElement('div');
    const studentsChildElementsName = document.createElement('a');
    studentsChildElementsName.textContent = listOfStudents[i].studentsName;
    studentsChildElementsName.setAttribute("href", listOfStudents[i].studentsSosail);
    const studentsChildElementsJob = document.createElement('span');
    studentsChildElementsJob.textContent = listOfStudents[i].studentsJob;
    const studentsChildElementsProfile = document.createElement('img');
    studentsChildElementsProfile.setAttribute("src", listOfStudents[i].studentsProfil);

    studentsChildElementsOfNJ.append(studentsChildElementsName, studentsChildElementsJob)
    studentsChildElements.append(studentsChildElementsProfile, studentsChildElementsOfNJ);

    studentsChild.append(studentsChildElements)
}

students.append(studentsChild);


const specialty = document.getElementsByClassName('specialty')[0];
const specialtyMainChild = document.createElement('div');
for (let i = 0; i < listOfSpecialty.length; i++) {
    const specialtyChild = document.createElement('div');
    const specialtyChildHead = document.createElement('h3');
    specialtyChildHead.textContent = listOfSpecialty[i].specialtyHead;
    const specialtyChildInform = document.createElement('p');
    specialtyChildInform.textContent = listOfSpecialty[i].specialtyInform;
    specialtyChild.append(specialtyChildHead, specialtyChildInform);
    specialtyMainChild.append(specialtyChild);
}
specialty.append(specialtyMainChild);



const newsMain = document.getElementsByClassName('news')[0], newsMainChild = document.createElement('div'),
    newsMore = document.createElement('div'), closeMore = document.createElement('i'), mainForNewsMore = document.getElementsByClassName('main')[0];
closeMore.className = "bx bx-x";
listOfMasterClass.forEach((e) => {
    const newsChild = document.createElement('div');
    newsChild.style.backgroundImage = `url(${e.masterClassCover})`;
    newsChild.style.backgroundRepeat = "no-repeat";
    newsChild.style.backgroundSize = "cover";
    newsChild.style.backgroundPosition = "center";

    const newsChildCover = document.createElement('div');
    const newsChildCoverImg = document.createElement('img');
    newsChildCoverImg.setAttribute('src', e.masterClassCover);
    newsChildCover.append(newsChildCoverImg);

    const newsChildText = document.createElement('div');
    const newsChildTextHead = document.createElement('h1');
    newsChildTextHead.textContent = e.masterClassHead;
    const newsChildTextParagraf = document.createElement('p');
    newsChildTextParagraf.textContent = e.masterClassParagraf;
    const newsChildTextMore = document.createElement('button');
    newsChildTextMore.textContent = "Daha Ətraflı";

    const newsChildTextDate = document.createElement('div');
    const newsChildTextDateSpan = document.createElement('span');
    newsChildTextDateSpan.textContent = e.dateOfMasterClass;
    const newsChildTextDateIcon = document.createElement('i');
    newsChildTextDateIcon.className = 'bx bx-calendar-week';
    newsChildTextDate.append(newsChildTextDateIcon, newsChildTextDateSpan);

    newsChildText.append(newsChildTextHead, newsChildTextParagraf, newsChildTextMore, newsChildTextDate);
    newsChild.append(newsChildText);
    newsMainChild.append(newsChild);

    newsChildTextMore.addEventListener('click', () => {
        newsMore.className = 'news-more';
        const newsChildMore = document.createElement('div');
        const newsChildMoreTextHead = document.createElement('h1');
        newsChildMoreTextHead.textContent = newsChildTextHead.textContent;
        const newsChildMoreTextParagraf = document.createElement('p');
        newsChildMoreTextParagraf.innerHTML = newsChildTextParagraf.textContent + '<br><br>'+ '<a href="https://wa.me/+994504587493" target = "_blank"> Elə indi yazıl</a>';
        const newsChildMorePhotos = document.createElement('div');
        for(let i = 0; i<e.photosOfMasterClass.length; i++){
            const boxOfMorePhotos = document.createElement('div');
            const morePhotos = document.createElement('img');
            morePhotos.setAttribute('src', e.photosOfMasterClass[i]);
            boxOfMorePhotos.append(morePhotos);
            newsChildMorePhotos.append(boxOfMorePhotos);
        }
        newsChildMore.append(newsChildMoreTextHead, newsChildMoreTextParagraf, newsChildMorePhotos);
        newsMore.append(newsChildMore, closeMore);
        mainForNewsMore.append(newsMore);
        newsMore.style.display = "flex";
    });
    closeMore.addEventListener('click', () => {
        newsMore.innerHTML = ""
        newsMore.style.display = "none";
    })
});
newsMain.append(newsMainChild);