const header = document.getElementsByTagName('header')[0];
const profil = document.createElement('a');
profil.setAttribute("href", "index.html");
const profilPhoto = document.createElement('img');
profilPhoto.setAttribute("src", "profil/art.png")

profil.append(profilPhoto);

const mainMenu = document.createElement('ul');
const childUl = document.createElement('ul');
const grandGirlUl = document.createElement('ul');

for (let i = 0; i < listOfMenu.length; i++) {
    const mainMenuChild = document.createElement('li');
    const mainMenuChildText = document.createElement('a');
    mainMenuChildText.textContent = listOfMenu[i].menuName;
    mainMenuChild.append(mainMenuChildText);
    if (i === 0) {
        mainMenuChildText.textContent = listOfMenu[i].menuName + " + ";
        mainMenuChildText.setAttribute("href", "#");

        const childUlElement1 = document.createElement('li');
        const childUlElement1Text = document.createElement('a');
        childUlElement1Text.setAttribute("href", "#");
        childUlElement1Text.textContent = "Qısa Müddətli +";
        childUlElement1.append(childUlElement1Text);

        const childUlElement2 = document.createElement('li');
        const childUlElement2Text = document.createElement('a');
        childUlElement2Text.setAttribute("href", "masterclass.html");
        childUlElement2Text.textContent = "Masterclasslar";
        childUlElement2.append(childUlElement2Text);

        for (let j = 0; j < listOfCourse.length; j++) {
            const grandGirlUlChild = document.createElement('li');
            const grandGirlUlChildText = document.createElement('a');
            grandGirlUlChildText.setAttribute("href", listOfMenu[i].menuLink);
            grandGirlUlChildText.textContent = listOfCourse[j].nameOfCourse;
            grandGirlUlChild.append(grandGirlUlChildText);
            grandGirlUl.append(grandGirlUlChild);
        }
        childUlElement1.append(grandGirlUl);

        childUl.append(childUlElement1, childUlElement2);

        mainMenuChild.append(childUl);
    }
    else {
        mainMenuChildText.setAttribute("href", listOfMenu[i].menuLink);
    }
    mainMenu.append(mainMenuChild);
}
header.append(profil, mainMenu)

let barIcon;
barIcon = document.createElement('i');
if (window.innerWidth < 990) {
    barIcon.setAttribute("class", "bx bx-menu");
    barIcon.style.fontSize = "2.3rem";
    barIcon.style.cursor = "pointer";
    header.append(barIcon);
}

barIcon.addEventListener('click', () => {
    mainMenu.classList.toggle("come-go");
    if (barIcon.className === "bx bx-menu") {
        barIcon.className = "bx bx-x";
    }
    else if (barIcon.className === "bx bx-x") {
        barIcon.className = "bx bx-menu";
    }
})

header.addEventListener('click', (e) => {
    if (e.target.textContent === listOfCorosel[0].coroselHead) {
        localStorage.setItem("objectNumber", 0);
    }
    else if (e.target.textContent === listOfCorosel[1].coroselHead) {
        localStorage.setItem("objectNumber", 1);
    }
    else if (e.target.textContent === listOfCorosel[2].coroselHead) {
        localStorage.setItem("objectNumber", 2);
    }
    else if (e.target.textContent === listOfCorosel[3].coroselHead) {
        localStorage.setItem("objectNumber", 3);
    }
})


let listOfBackWords = ["a", "r", "t", "c", "e", "n", "t", "e", "r"];
const lastArea = document.getElementsByClassName('last-area')[0];
const lastAreaBack = document.createElement('div');
lastAreaBack.setAttribute("class", "last-area-back")
for (let i = 0; i < listOfBackWords.length; i++) {
    const article = document.createElement('article');
    article.textContent = listOfBackWords[i];
    if (i < 3) {
        article.setAttribute("class", "first-l");
    }
    lastAreaBack.append(article)
}

const lastAreaSosialMain = document.createElement('div');
lastAreaSosialMain.setAttribute("class", "last-area-sosial-main")
const lastAreaHeading = document.createElement('h1');
lastAreaHeading.textContent = "bizi İzləyin";
lastAreaHeading.setAttribute("class", "last-area-heading")

const lastAreaSosial = document.createElement("div");
lastAreaSosial.setAttribute("class", "last-area-sosial");

const faBrandsMother1 = document.createElement('a');
faBrandsMother1.setAttribute("href", "https://www.instagram.com/art_center_azerbaijan");
faBrandsMother1.setAttribute("target", "_blank");
const faBrands1 = document.createElement('i');
faBrands1.setAttribute("class", "fa-brands fa-instagram");
faBrandsMother1.append(faBrands1);

const faBrandsMother2 = document.createElement('a');
faBrandsMother2.setAttribute("href", "https://www.tiktok.com/@artcenterazerbaij");
faBrandsMother2.setAttribute("target", "_blank");
const faBrands2 = document.createElement('i');
faBrands2.setAttribute("class", "fa-brands fa-tiktok");
faBrandsMother2.append(faBrands2);

const faBrandsMother3 = document.createElement('a');
faBrandsMother3.setAttribute("href", "https://www.facebook.com/artcenter.az");
faBrandsMother3.setAttribute("target", "_blank");
const faBrands3 = document.createElement('i');
faBrands3.setAttribute("class", "fa-brands fa-facebook");
faBrandsMother3.append(faBrands3);

const faBrandsMother4 = document.createElement('a');
faBrandsMother4.setAttribute("href", "https://www.youtube.com/@artcenterazerbaijan");
faBrandsMother4.setAttribute("target", "_blank");
const faBrands4 = document.createElement('i');
faBrands4.setAttribute("class", "fa-brands fa-youtube");
faBrandsMother4.append(faBrands4);

lastAreaSosial.append(faBrandsMother1, faBrandsMother2, faBrandsMother3, faBrandsMother4);
lastAreaSosialMain.append(lastAreaHeading, lastAreaSosial)

lastAreaBack.append(lastAreaSosialMain);

const lastAreaContactMain = document.createElement('div');
lastAreaContactMain.setAttribute("class", "last-area-contact-main")
const lastAreaContact = document.createElement('div');
lastAreaContact.setAttribute("class", "last-area-contact");

const constactSpan1 = document.createElement('a');
const constactSpanChild1 = document.createElement('i');
constactSpanChild1.setAttribute("class", "bx bx-envelope");
constactSpan1.append(constactSpanChild1, "artcenterazerbaijan@gmail.com");
constactSpan1.setAttribute('href', 'mailto:artcenterazerbaijan@gmail.com');

const constactSpan2 = document.createElement('a');
const constactSpanChild2 = document.createElement('i');
constactSpanChild2.setAttribute("class", "bx bxl-whatsapp");
constactSpan2.append(constactSpanChild2, "+994 55 257 57 65");
constactSpan2.setAttribute('href', 'https://wa.me/+994552575765');

lastAreaContact.append(constactSpan1, constactSpan2);
lastAreaContactMain.append(lastAreaContact);

const copyRight = document.createElement('div');
copyRight.setAttribute("class", "copyright");
const copyRightSpan = document.createElement('span');
const copyRightLink = document.createElement('a');
copyRightLink.setAttribute("href", "https://vidadiali.com");
copyRightLink.setAttribute("target", "_blank");
copyRightLink.setAttribute("style", "color: aliceblue;");
copyRightLink.textContent = " Vidadi Ali";
copyRightSpan.innerHTML = "Copyright &copy; 2023 Bütün hüquqlar qorunur | Developed by ";
copyRightSpan.append(copyRightLink);
copyRight.append(copyRightSpan);

lastArea.append(lastAreaBack, lastAreaContactMain, copyRight);