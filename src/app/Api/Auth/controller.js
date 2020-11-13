import { AuthService } from './service';

class Controller {
  constructor() {
    this.service = AuthService;
  }
}

export const AuthController = new Controller();