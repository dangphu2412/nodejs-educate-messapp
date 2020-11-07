import bcrypt from 'bcrypt';
import Repository from './AuthRepository';

class AuthService {
  static service;

  constructor() {
    this.repository = Repository.getRepository();
  }

  static getService() {
    if (!this.service) {
      this.service = new this();
    }
    return this.service;
  }

  registerEmailAndPwd(email, pwd) {
    const saltRounds = 10;
    const hashedPwd = bcrypt.hash(pwd, saltRounds);
    return this.repository.registerEmailAndPwd(email, hashedPwd);
  }
}

export default AuthService;
