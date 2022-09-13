export default class AuthService {
  async login(username, password) {
    return {
      username: "jb",
      token: "1234",
    };
  }

  async me() {
    return {
      username: "jb",
      token: "1234",
    };
  }

  async logout() {
    return;
  }

  async signup(username, password, name, email, url) {
    return {
      username: "jb",
      token: "1234",
    };
  }
}
