import { AuthRepository } from './AuthRepository';

export class AuthService {
  static service;

  constructor() {
    this.repository = AuthRepository.getRepository();
  }

  static getService() {
    if (!this.service) {
      this.service = new this();
    }
    return this.service;
  }
}
