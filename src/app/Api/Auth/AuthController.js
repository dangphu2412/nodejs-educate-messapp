import { AuthService } from './AuthService';

export class AuthController {
  constructor() {
    this.service = AuthService.getService();
  }
}
