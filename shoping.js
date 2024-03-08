const mainOfSite = document.getElementsByClassName('main')[0];
const photoView = document.createElement('div'), photoViewClose = document.createElement('i'), photoViewImg = document.createElement('img'), photoViewChild = document.createElement('div');

const forDesktop = document.createElement('div'), closeDesktop = document.createElement('button');
window.onload = function () {
    forDesktop.className = "for-desktop";
    const desktopChild = document.createElement('div');
    const desktopChildText = document.createElement('p');
    desktopChildText.textContent = `Dəyərli müştəri, bizdən alış-veriş etmək üçün, "Al" düyməsinə basdıqdan
     sonra WhatsApp xəttimizə yönlədiriləcəksiniz. Xahiş olunur ki, seçdiyiniz malın adını və index nömrəsini
      whatsapp əlaqəsində bizə bildirəsiniz. Biz sizə oradan geri dönüş edəcəyik. Bizi seçdiyiniz üçün təşəkkürlər! 😇`;
    closeDesktop.textContent = "Anladım";
    desktopChild.append(desktopChildText, closeDesktop);
    forDesktop.append(desktopChild)
    mainOfSite.append(forDesktop)
}

closeDesktop.addEventListener('click', () => {
    forDesktop.style.display = "none";
})

const forShoping = document.getElementsByClassName('for-shoping')[0];

function addElement(Element) {

    const shopingChild = document.createElement('div');
    const shopingChildMotherOfCover = document.createElement('div');
    shopingChildMotherOfCover.className = "cover-of-mother";
    const shopingChildCover = document.createElement("img");
    shopingChildCover.setAttribute("src", Element.coverOfElement);
    shopingChildMotherOfCover.append(shopingChildCover);
    if (Element.discountOfElement !== "") {
        const discount = document.createElement('span');
        discount.textContent = Element.discountOfElement + "% Endirim";
        shopingChildMotherOfCover.append(discount);
    }
    const shopingChildName = document.createElement('h2');
    shopingChildName.textContent = Element.nameOfElement;
    const shopingChildParagraf = document.createElement('p');
    shopingChildParagraf.innerHTML = Element.paragrafOfElement;
    const shopingChildIndex = document.createElement("span");
    shopingChildIndex.textContent = "İndex:    " + Element.indexOfElement;
    const shopingChildAmount = document.createElement('div');
    shopingChildAmount.className = "shop-amount";
    const shopingChildAmountMain = document.createElement('span');
    shopingChildAmountMain.innerHTML = Element.amountOfElement + " &#8380;";
    shopingChildAmountMain.style.color = "var(--darkColor)";
    shopingChildAmount.append(shopingChildAmountMain);
    if (Element.discountOfElement !== "") {
        shopingChildAmountMain.style.textDecoration = "line-through";
        shopingChildAmountMain.style.color = "gray";
        const shopingChildAmountNew = document.createElement('span');
        shopingChildAmountNew.innerHTML = (Element.amountOfElement - ((Element.amountOfElement * Element.discountOfElement) / 100)).toFixed(2) + " &#8380;";
        shopingChildAmountNew.style.color = "var(--darkColor)";
        shopingChildAmount.append(shopingChildAmountNew);
    }
    const shopAndView = document.createElement("div");
    const view = document.createElement("button");
    view.textContent = "Ətraflı Bax";
    const shop = document.createElement("button");
    shop.textContent = "İndi Al";

    shopAndView.append(view, shop);

    shopingChild.append(shopingChildMotherOfCover, shopingChildName, shopingChildParagraf, shopingChildIndex, shopingChildAmount, shopAndView);
    forShoping.append(shopingChild);

    shop.addEventListener('click', () => {
        window.location = "https://wa.me/+994504587493";
    });

    forShoping.addEventListener('click', (e) => {
        photoView.style.display = "flex";
        if (e.target.textContent === "Ətraflı Bax") {
            photoView.className = "photo-view";
            photoViewImg.setAttribute('src', e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].getAttribute('src'));
            photoViewClose.className = "bx bx-x";
            photoViewChild.append(photoViewImg)
            photoView.append(photoViewChild, photoViewClose);

            mainOfSite.append(photoView);

        }
    })

    photoViewClose.addEventListener('click', () => {
        photoView.style.display = "none";
    });
}



//const inputOfElement = document.getElementsByTagName('input')[0];
// inputOfElement.onkeydown = function () {
//     listOfShoping.forEach((element) => {
//         let TF;
//         if (element.indexOfElement.includes(inputOfElement.value)) {
//             TF = 1;
//         }
//         else{
//             TF = 0;
//         }
//         addElement(element, TF);
//     })
// }



listOfShoping.forEach((element) => {
    addElement(element);
})

const choosenShop = document.getElementsByClassName('choosenShop');

choosenShop[0].addEventListener('click', () => {
    forShoping.innerHTML = "";
    listOfShoping.forEach((element) => {
        if (element.indexOfElement[0] === "q") {
            addElement(element);
        }
    })
})
choosenShop[1].addEventListener('click', () => {
    forShoping.innerHTML = "";
    listOfShoping.forEach((element) => {
        if (element.indexOfElement[0] === "x") {
            addElement(element);
        }
    })
})

choosenShop[2].addEventListener('click', () => {
    forShoping.innerHTML = "";
    listOfShoping.forEach((element) => {
        if (element.indexOfElement[0] === "g") {
            addElement(element);
        }
    })
})

choosenShop[3].addEventListener('click', () => {
    forShoping.innerHTML = "";
    listOfShoping.forEach((element) => {
        if (element.indexOfElement[0] === "a") {
            addElement(element);
        }
    })
})

