import BaseRepository from '../../infrastructure/Repositories/BaseRepository';

class AuthRepository extends BaseRepository {
  static repository;

  static getRepository() {
    if (!this.repository) {
      this.repository = new this('users');
    }

    return this.repository;
  }

  registerEmailAndPwd(email, hashedPwd) {
    return this.create({
      email,
      password: hashedPwd,
    });
  }
}

export default AuthRepository;
