const mainOfArticle = document.getElementsByTagName('main')[0];

const mainOfArticleChild = document.createElement('div');
const mainOfArticleChildList = document.createElement('ul');

listOfArticle.forEach((e)=>{
    const mainOfArticleChildListChild = document.createElement('li');
    const mainOfArticleChildListChildLink = document.createElement('a');
    mainOfArticleChildListChildLink.textContent = e.nameOfArticle;
    mainOfArticleChildListChildLink.setAttribute('href', `#${e.nameOfArticle}`);
    mainOfArticleChildListChild.append(mainOfArticleChildListChildLink);
    mainOfArticleChildList.append(mainOfArticleChildListChild);
});

const mainOfArticleChildSection = document.createElement('div');

listOfArticle.forEach((e)=>{
    const mainOfArticleChildSectionChild = document.createElement('div');
    mainOfArticleChildSectionChild.setAttribute('id', e.nameOfArticle);
    const mainOfArticleChildSectionChildCover = document.createElement('img');
    mainOfArticleChildSectionChildCover.setAttribute('src', e.coverOfArticle);

    const mainOfArticleChildSectionChildInform = document.createElement('div');
    const mainOfArticleChildSectionChildInformHead = document.createElement('h1');
    mainOfArticleChildSectionChildInformHead.textContent = e.nameOfArticle;
    const mainOfArticleChildSectionChildInformWriter = document.createElement('span');
    mainOfArticleChildSectionChildInformWriter.textContent = e.nameOfWriter;
    const mainOfArticleChildSectionChildInformParagraf = document.createElement('p');
    mainOfArticleChildSectionChildInformParagraf.textContent = e.informOfArticle;
    const mainOfArticleChildSectionChildInformDownload = document.createElement('a');
    mainOfArticleChildSectionChildInformDownload.setAttribute('href', e.linkOfArticle);
    const mainOfArticleChildSectionChildInformDownloadIcon = document.createElement('i');
    mainOfArticleChildSectionChildInformDownloadIcon.className = 'bx bx-download';
    mainOfArticleChildSectionChildInformDownload.append(mainOfArticleChildSectionChildInformDownloadIcon, ' Endir');

    mainOfArticleChildSectionChildInform.append(mainOfArticleChildSectionChildInformHead, mainOfArticleChildSectionChildInformWriter, mainOfArticleChildSectionChildInformParagraf, mainOfArticleChildSectionChildInformDownload);
    mainOfArticleChildSectionChild.append(mainOfArticleChildSectionChildCover, mainOfArticleChildSectionChildInform);
    mainOfArticleChildSection.append(mainOfArticleChildSectionChild);
});

mainOfArticleChild.append(mainOfArticleChildList, mainOfArticleChildSection);
mainOfArticle.append(mainOfArticleChild);