import { AuthRepository } from '../User/repository';

class Service {
  static service;

  constructor() {
    this.userRpository = AuthRepository;
  }
}

export const AuthService = new Service();