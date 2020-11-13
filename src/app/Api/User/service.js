import { UserRepository } from './repository';

class Service {
  constructor() {
    this.repository = UserRepository;
  }
}

export const UserService = new Service();
