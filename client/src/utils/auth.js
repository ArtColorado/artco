import decode from "jwt-decode";

class AuthService {
  login(token) {
    localStorage.setItem("authToken", token);
  }
}

export default new AuthService();
