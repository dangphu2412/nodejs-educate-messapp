import { UserService } from './service';

class Controller {
  constructor() {
    this.service = UserService;
  }
}

export const UserController = new Controller();
