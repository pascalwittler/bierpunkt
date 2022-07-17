export class Rendering {
  constructor() {
    this.wrapper = document.querySelector('main');
  }

  insertHtml(htmlContent) {
    this.wrapper.innerHTML = htmlContent;
  }
}
