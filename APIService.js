import websiteUrl from "./remote";
export default class APIService {
  static getArticles() {
    return fetch(`${websiteUrl}/articles-api/`);
  }

  static login(body) {
    return fetch(`${websiteUrl}/auth-api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  static logout(token) {
    return fetch(`${websiteUrl}/logout-api/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: "",
    });
  }

}
