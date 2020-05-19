class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(username, password, cb) {
    console.log(username, password);
    if (username === "admin" && password === "admin") {
      this.authenticated = true;
      cb();
    }
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
