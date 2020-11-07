import Service from './AuthService';

class AuthController {
  constructor() {
    this.service = Service.getService();
  }

  registerByEmail = async (req, res) => {
    try {
      const { email, pwd } = req.body;

      const result = await this.service.registerEmailAndPwd(email, pwd);

      return res.status(200).json({
        message: result,
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Bad request',
      });
    }
  }
}

export default AuthController;
