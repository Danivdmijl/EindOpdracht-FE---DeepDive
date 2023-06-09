let number1 = Math.floor(Math.random() * 7);
let number2 = Math.floor(Math.random() * 7);
let number3 = Math.floor(Math.random() * 7);
let number4 = Math.floor(Math.random() * 7);


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
      let iteration = 1;

      for (let i = 1; i <= 4; i++) {
        const sectionCardElement = document.createElement("article");
        sectionCardElement.classList.add("mainSection__left__cards");

        const LeftSectionCardInfoElement = document.createElement("h4");
        LeftSectionCardInfoElement.classList.add("mainSection__left__cards__infotext");

        const LeftSectionCardDatumElement = document.createElement("h4");
        LeftSectionCardDatumElement.classList.add("mainSection__left__cards__img--datum");

        const LeftSectionCardIMGElement = document.createElement("img");
        LeftSectionCardIMGElement.classList.add("mainSection__left__cards__img");

        switch(iteration) {
          case 2:
            LeftSectionCardInfoElement.innerText = data.episodes[number2].title;
            LeftSectionCardDatumElement.innerText = data.episodes[number2]['date (dd-mm-yyyy)'];
            LeftSectionCardIMGElement.src = data.episodes[number2].img;
            sectionCardElement.addEventListener("click", () => {
              this.updateRightSection(new DetailCard(data.episodes[number2]));
            });
            break;
          case 3:
            LeftSectionCardInfoElement.innerText = data.episodes[number3].title;
            LeftSectionCardDatumElement.innerText = data.episodes[number3]['date (dd-mm-yyyy)'];
            LeftSectionCardIMGElement.src = data.episodes[number3].img;
            sectionCardElement.addEventListener("click", () => {
              this.updateRightSection(new DetailCard(data.episodes[number3]));
            });
            break;
          case 4:
            LeftSectionCardInfoElement.innerText = data.episodes[number4].title;
            LeftSectionCardDatumElement.innerText = data.episodes[number4]['date (dd-mm-yyyy)'];
            LeftSectionCardIMGElement.src = data.episodes[number4].img;
            sectionCardElement.addEventListener("click", () => {
              this.updateRightSection(new DetailCard(data.episodes[number4]));
            });
            break;
          default:
            LeftSectionCardInfoElement.innerText = data.episodes[number1].title;
            LeftSectionCardDatumElement.innerText = data.episodes[number1]['date (dd-mm-yyyy)'];
            LeftSectionCardIMGElement.src = data.episodes[number1].img;
            sectionCardElement.addEventListener("click", () => {
              this.updateRightSection(new DetailCard(data.episodes[number1]));
            });
        }

        sectionCardElement.appendChild(LeftSectionCardInfoElement);
        sectionCardElement.appendChild(LeftSectionCardDatumElement);
        sectionCardElement.appendChild(LeftSectionCardIMGElement);

        this.LeftArticleElement.appendChild(sectionCardElement);

        if (iteration === 4) {
          iteration = 1;
        } else {
          iteration++;
        }
      }
    })();
  }

  updateRightSection(detailCard) {
    detailCard.render();
  }

  render() {
    this.mainElement.appendChild(this.LeftArticleElement);
  }
}


class RightPanel {
  DetailCard;
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

    this.rightContainerElement = document.createElement("section");
    this.rightContainerElement.classList.add("mainSection__right__container");

    this.rightSectionCardElement = document.createElement("article");
    this.rightSectionCardElement.classList.add("mainSection__right__container__card");

    this.rightAudioSectionElement = document.createElement("section");
    this.rightAudioSectionElement.classList.add("mainSection__right__container__buttonWrapper");
  }

  async render() {
    this.mainElement.appendChild(this.RightArticleElement);

    const data = await this.GetDataFromApi.getData();

    this.rightSectionInfoElement = document.createElement("h4");
    this.rightSectionInfoElement.classList.add("mainSection__left__cards__infotext");
    this.rightSectionInfoElement.innerText = data.episodes[number1].title;

    this.rightSectionDatumElement = document.createElement("h4");
    this.rightSectionDatumElement.classList.add("mainSection__left__cards__img--datum");
    this.rightSectionDatumElement.innerText = data.episodes[number1]['date (dd-mm-yyyy)'];

    this.rightSectionIMGElement = document.createElement("img");
    this.rightSectionIMGElement.classList.add("mainSection__left__cards__img", "mainSection__right__card__img");
    this.rightSectionIMGElement.src = data.episodes[number1].img;

    this.rightSectionTextElement = document.createElement("p");
    this.rightSectionTextElement.classList.add("mainSection__right__container__text");
    this.rightSectionTextElement.innerText = data.episodes[number1].summary;

    this.rightAudioElement = document.createElement("audio");
    this.rightAudioElement.src = data.episodes[number1].audio;
    this.rightAudioElement.controls = true;

    this.rightSourceElement = document.createElement("a");
    this.rightSourceElement.classList.add("mainSection__right__container__source")
    this.rightSourceElement.innerText = "Source >";
    this.rightSourceElement.setAttribute("href", data.episodes[number1].url);

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

class DetailCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    const rightSectionInfoElement = document.querySelector(".mainSection__right__container__card h4");
    const rightSectionDatumElement = document.querySelector(".mainSection__right__container__card h4:nth-child(2)");
    const rightSectionIMGElement = document.querySelector(".mainSection__right__card__img");
    const rightSectionTextElement = document.querySelector(".mainSection__right__container__text");
    const rightAudioElement = document.querySelector(".mainSection__right__container__buttonWrapper audio");
    const rightSourceElement = document.querySelector(".mainSection__right__container__source");

    rightSectionInfoElement.innerText = this.data.title;
    rightSectionDatumElement.innerText = this.data['date (dd-mm-yyyy)'];
    rightSectionIMGElement.src = this.data.img;
    rightSectionTextElement.innerText = this.data.summary;
    rightAudioElement.src = this.data.audio;
    rightSourceElement.setAttribute("href", this.data.url);
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