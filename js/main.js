let number = Math.floor(Math.random() * 8);



class GetDataFromApi {
  url = "";
  data = null;

  constructor(newURL) {
    this.url = newURL;
  }

  async getData() {
    await fetch(this.url)
      .then(function (response) {
        return response.json();
      }).then((data) => {
        this.data = data;
      });
    return this.data;
  }
}


class Header {
  headerElement;
  ILogoelement;
  h2LogoTextElement
  placeToRenderHeader;

  constructor(placeToRenderHeader) {
    this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];
    this.headerElement = document.createElement("header");
    this.headerElement.classList = "header";

    this.ILogoelement = document.createElement("i");
    this.ILogoelement.classList = "fa-solid fa-blog header__logo";

    this.h2LogoTextElement = document.createElement("h2");
    this.h2LogoTextElement.classList = "header__logo";
    this.h2LogoTextElement.innerText = "Collection of Happiness";
  }

  render() {
    this.headerElement.appendChild(this.ILogoelement);
    this.headerElement.appendChild(this.h2LogoTextElement);
    this.placeToRenderHeader.appendChild(this.headerElement);
  }
}

class MainPanel {
  placeToRenderMain;
  leftSection;
  rightSection;

  constructor(placeToRenderMain) {
    this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

    this.mainElement = document.createElement("section");
    this.mainElement.classList.add("mainSection");

    this.leftSection = new LeftSection(this.mainElement);
    this.rightSection = new RightPanel(this.mainElement);
  }

  render() {
    this.placeToRenderMain.appendChild(this.mainElement);
    this.leftSection.render();
    this.rightSection.render();
  }
}

class LeftSection {
  mainElement;
  sectionElement;
  LeftArticleElement;
  placeToRenderMainSection;
  GetDataFromApi;

  constructor(mainElement) {
    this.mainElement = mainElement;

    this.LeftArticleElement = document.createElement("article");
    this.LeftArticleElement.classList.add("mainSection__left");

    this.GetDataFromApi = new GetDataFromApi("../data/data.json");

    (async () => {
      const data = await this.GetDataFromApi.getData();

      for (let i = 1; i <= 4; i++) {
        const sectionCardElement = document.createElement("article");
        sectionCardElement.classList.add("mainSection__left__cards");
        const LeftSectionCardInfoElement = document.createElement("h4");
        LeftSectionCardInfoElement.classList.add("mainSection__left__cards__infotext");
        LeftSectionCardInfoElement.innerText = data.episodes[number].title;
        sectionCardElement.appendChild(LeftSectionCardInfoElement);
        const LeftSectionCardDatumElement = document.createElement("h4");
        LeftSectionCardDatumElement.classList.add("mainSection__left__cards__img--datum");
        LeftSectionCardDatumElement.innerText = data.episodes[number].date;
        sectionCardElement.appendChild(LeftSectionCardDatumElement);
        const LeftSectionCardIMGElement = document.createElement("img");
        LeftSectionCardIMGElement.classList.add("mainSection__left__cards__img");
        LeftSectionCardIMGElement.src = "../img/Plaatje.webp";
        sectionCardElement.appendChild(LeftSectionCardIMGElement);

        this.LeftArticleElement.appendChild(sectionCardElement);
        number++;
      }
    })();
  }

  render() {
    this.mainElement.appendChild(this.LeftArticleElement);
  }
}

class RightPanel {
  placeToRenderMainSection;
  RightArticleElement;
  rightContainerElement;
  rightSectionCardElement;
  rightSectionInfoElement;
  rightSectionDatumElement;
  rightSectionTextElement;
  rightAudioSectionElement;
  rightAudioElement;
  rightSourceElement;
  GetDataFromApi;

  constructor(mainElement) {
    this.mainElement = mainElement;

    this.RightArticleElement = document.createElement("article");
    this.RightArticleElement.classList.add("mainSection__right");

    this.GetDataFromApi = new GetDataFromApi("../data/data.json");

    (async () => {
      const data = await this.GetDataFromApi.getData();
          })();

    this.rightContainerElement = document.createElement("section");
    this.rightContainerElement.classList.add("mainSection__right__container");

    this.rightSectionCardElement = document.createElement("article");
    this.rightSectionCardElement.classList.add("mainSection__right__container__card");

    this.rightSectionInfoElement = document.createElement("h4");
    this.rightSectionInfoElement.classList.add("mainSection__left__cards__infotext");
    this.rightSectionInfoElement.innerText = "Ian en de Snoepdief";


    this.rightSectionDatumElement = document.createElement("h4");
    this.rightSectionDatumElement.classList.add("mainSection__left__cards__img--datum");
    this.rightSectionDatumElement.innerText = ("12-4-2023");

    this.rightSectionIMGElement = document.createElement("img");
    this.rightSectionIMGElement.classList.add("mainSection__left__cards__img");
    this.rightSectionIMGElement.src = "../img/plaatje.webp";

    this.rightSectionTextElement = document.createElement("p");
    this.rightSectionTextElement.classList.add("mainSection__right__container__text");
    this.rightSectionTextElement.innerText = ("Lorem ");

    this.rightAudioSectionElement = document.createElement("section");
    this.rightAudioSectionElement.classList.add("mainSection__right__container__buttonWrapper");

    this.rightAudioElement = document.createElement("audio");
    this.rightAudioElement.src = "../Audio/unlimited.mp3";
    this.rightAudioElement.controls = true;

    this.rightSourceElement = document.createElement("a");
    this.rightSourceElement.classList.add("mainSection__right__container__source")
    this.rightSourceElement.innerText = "Source >";
    this.rightSourceElement.setAttribute("href", "https://www.youtube.com/watch?v=aKd_7kGalEA");


  }

  render() {
    this.mainElement.appendChild(this.RightArticleElement);

    this.RightArticleElement.appendChild(this.rightContainerElement);
    this.rightContainerElement.appendChild(this.rightSectionCardElement);
    this.rightSectionCardElement.appendChild(this.rightSectionInfoElement);
    this.rightSectionCardElement.appendChild(this.rightSectionDatumElement);
    this.rightSectionCardElement.appendChild(this.rightSectionIMGElement);

    this.rightContainerElement.appendChild(this.rightSectionTextElement);
    this.rightContainerElement.appendChild(this.rightAudioSectionElement);
    this.rightAudioSectionElement.appendChild(this.rightAudioElement);
    this.rightAudioSectionElement.appendChild(this.rightSourceElement);
  }
}



class Footer {
  footerElement;
  h4TextElement;
  placeToRenderFooter;

  constructor(placeToRenderFooter) {
    this.placeToRenderFooter = document.getElementsByTagName(placeToRenderFooter)[0];
    this.footerElement = document.createElement("footer");
    this.footerElement.classList = "footer";

    this.h4TextElement = document.createElement("h4");
    this.h4TextElement.innerText = "Gemaakt door - Dani SD2D MediaCollege";
  }

  render() {
    this.footerElement.appendChild(this.h4TextElement);
    this.placeToRenderFooter.appendChild(this.footerElement);
  }
}

class App {
  Header;
  Footer;
  LeftPanel;
  RightPanel;
  MainPanel;
  GetDataFromApi;

  constructor() {
    this.header = new Header("main");
    this.MainPanel = new MainPanel("main");
    this.footer = new Footer("main");
    this.LeftPanel = new LeftSection(this.MainPanel.mainElement);
    this.RightPanel = new RightPanel(this.MainPanel.mainElement);

    this.GetDataFromApi = new GetDataFromApi("../data/data.json");
    this.GetDataFromApi
      .getData().then((data) => {
      });

    this.header.render();
    this.MainPanel.render();
    this.footer.render();
  }
}

const app = new App();

