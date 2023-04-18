// class DataLoader {
//     constructor(url) {
//       this.url = url;
//     }
  
//     loadData() {
//       fetch(this.url)
//         .then(response => response.json())
//         .then(data => console.log(data.episodes))
//         .catch(error => console.error(error));
//     }
//   }
  
//   const dataLoader = new DataLoader('../data/data.json');
//   dataLoader.loadData();


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
        this.h2LogoTextElement.innerText = "Logo Text";
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

  constructor(mainElement) {
    this.mainElement = mainElement;

    this.LeftArticleElement = document.createElement("article");
    this.LeftArticleElement.classList.add("mainSection__left");

    for (let i = 1; i <= 4; i++) {
      const sectionCardElement = document.createElement("article");
      sectionCardElement.classList.add("mainSection__left__cards");
      const LeftSectionCardInfoElement = document.createElement("h4");
      LeftSectionCardInfoElement.classList.add("mainSection__left__cards__infotext");
      LeftSectionCardInfoElement.innerText = "Ian en de Snoepdief";
      sectionCardElement.appendChild(LeftSectionCardInfoElement);
      const LeftSectionCardDatumElement = document.createElement("h4");
      LeftSectionCardDatumElement.classList.add("mainSection__left__cards__img--datum");
      LeftSectionCardDatumElement.innerText = "12-4-2023";
      sectionCardElement.appendChild(LeftSectionCardDatumElement);
      const LeftSectionCardIMGElement = document.createElement("img");
      LeftSectionCardIMGElement.classList.add("mainSection__left__cards__img");
      LeftSectionCardIMGElement.src = "../img/Plaatje.webp";
      sectionCardElement.appendChild(LeftSectionCardIMGElement);

      this.LeftArticleElement.appendChild(sectionCardElement);
    }
  }

  render() {
    this.mainElement.appendChild(this.LeftArticleElement);
  }
}

class RightPanel {
  placeToRenderMainSection;
  RightArticleElement;

  constructor(mainElement) {
    this.mainElement = mainElement;

    this.RightArticleElement = document.createElement("article");
    this.RightArticleElement.classList.add("mainSection__right");
  }

  render() {
    this.mainElement.appendChild(this.RightArticleElement);
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

  constructor() {
    this.header = new Header("main");
    this.MainPanel = new MainPanel("main");
    this.footer = new Footer("main");
    this.LeftPanel = new LeftSection(this.MainPanel.mainElement);
    this.RightPanel = new RightPanel(this.MainPanel.mainElement);

    this.header.render();
    this.MainPanel.render();
    this.footer.render();
  }
}

const app = new App();

