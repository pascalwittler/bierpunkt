export class Api {
  constructor() {
    this.baseUrl = 'http://localhost:7259';
  }

  sendRequest(route) {
    fetch(this.baseUrl + route)
      .then((response) => response.json())
      .then((responseData) => console.log(responseData));
  }
}
