import { BaseRepository } from '../../../infrastructure/Repositories/BaseRepository';

export class AuthRepository extends BaseRepository {
  static repository;

  static getRepository() {
    if (!this.repository) {
      this.repository = new this('users');
    }

    return this.repository;
  }
}
