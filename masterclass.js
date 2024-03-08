const masterClass = document.getElementsByClassName('masterclass')[0];
const informOfMasterClass  = document.createElement('p');
informOfMasterClass.innerHTML = `İstədiyin zaman bizə qoşul, özünü kəşf et. <br>Mərkəzimizdə təlimi 
keçirilən bir-neçə ixtisasda 
özünü sınaya, gələcəyin həm maraqlı, həm də gəlirli sahəsinə addım ata bilərsən. 
<br>Bunun üçün sadəcə 'adını indi yazdır' düyməsinə klik 
etməklə whatsapp xəttimizdə bizimlə əlaqəyə keçib, iştirak gününü və saatını təyin et`;
masterClass.append(informOfMasterClass);
listOfMasterClass.forEach((e)=>{
    const masterClassChild = document.createElement('div');
    const masterClassChildChild = document.createElement('div');
    masterClassChildChild.style.background = "url(" + e.masterClassCover + ")";
    masterClassChildChild.style.backgroundRepeat = "no-repeat";
    masterClassChildChild.style.backgroundSize = "cover";
    masterClassChildChild.style.backgroundPosition = "center";
    const masterClassChildChildButton = document.createElement('button');
    masterClassChildChildButton.textContent = "İndi adını yazdır";
    masterClassChildChildButton.addEventListener('click', ()=>{
        window.location = "https://wa.me/+994552575765";
    })
    masterClassChildChild.append(masterClassChildChildButton)

    const masterClassChildChildText = document.createElement('div');
    const masterClassChildName = document.createElement('h3');
    masterClassChildName.textContent = e.masterClassHead;
    const masterClassChildChildSlogan = document.createElement('span');
    masterClassChildChildSlogan.textContent = "Seçmək sizdən, Öyrətmək bizdən!";
    const masterClassChildChildParagraf = document.createElement('p');
    masterClassChildChildParagraf.innerHTML = e.masterClassParagraf; 
    masterClassChildChildText.append(masterClassChildName, masterClassChildChildParagraf, masterClassChildChildSlogan);
    masterClassChild.append(masterClassChildChild, masterClassChildChildText);
    masterClass.append(masterClassChild);
})