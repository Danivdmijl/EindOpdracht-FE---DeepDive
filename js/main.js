class DataLoader {
    constructor(url) {
      this.url = url;
    }
  
    loadData() {
      fetch(this.url)
        .then(response => response.json())
        .then(data => console.log(data.episodes))
        .catch(error => console.error(error));
    }
  }
  
  const dataLoader = new DataLoader('../data/data.json');
  dataLoader.loadData();


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
    sectionElement;
    LeftArticleElement;
    LeftSectionCardElement;

    placeToRenderMainSection;
    
  
    constructor(placeToRenderMainSection) {
      this.placeToRenderMainSection = document.getElementsByTagName(
        placeToRenderMainSection
      )[0];
      this.sectionElement = document.createElement("section");
      this.sectionElement.classList = "mainSection";

      this.LeftArticleElement = document.createElement("article");
      this.LeftArticleElement.classList = "mainSection__left";

      this.LeftSectionCardElement1 = document.createElement("article1");
      this.LeftSectionCardElement2 = document.createElement("article2");
      this.LeftSectionCardElement3 = document.createElement("article3");
      this.LeftSectionCardElement4 = document.createElement("article4");
      this.LeftSectionCardElement1.classList = "mainSection__left__cards";
      this.LeftSectionCardElement2.classList = "mainSection__left__cards";
      this.LeftSectionCardElement3.classList = "mainSection__left__cards";
      this.LeftSectionCardElement4.classList = "mainSection__left__cards";
    }
  
    render() {
      this.placeToRenderMainSection.appendChild(this.sectionElement);
      this.sectionElement.appendChild(this.LeftArticleElement);
      this.LeftArticleElement.appendChild(this.LeftSectionCardElement1);
      this.LeftArticleElement.appendChild(this.LeftSectionCardElement2);
      this.LeftArticleElement.appendChild(this.LeftSectionCardElement3);
      this.LeftArticleElement.appendChild(this.LeftSectionCardElement4);
    }
  }

class Footer{
    footerElement;
    h4TextElement;
    placeToRenderFooter;

    constructor(placeToRenderFooter){
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
    MainPanel;

    constructor() {
        this.header = new Header("main");
        this.footer = new Footer("main");
        this.MainPanel = new MainPanel("main");
        
        this.header.render();
        this.MainPanel.render();
        this.footer.render();            
    }
}

const app = new App();