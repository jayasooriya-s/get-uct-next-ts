export class Portfolio {
  imageWeb?: string;
  imageMobile?: string;
  title?: string;
  icon?: string;

  constructor({ imageMobile, imageWeb, title, icon }: namedParameters) {
    this.imageWeb = imageWeb;
    this.imageMobile = imageMobile;
    this.title = title;
    this.icon = icon;
  }
}

type namedParameters = {
  title?: string;
  icon?: string;
  imageWeb?: string;
  imageMobile?: string;
};
