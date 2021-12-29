import db from '../database/index.js';
import crypto from 'crypto';

import verifyEmail from '../utils/verifyEmail';
import verifyConfirmPassword from '../utils/verifyConfirmPassword'

class DoctorController {

  async createUser(req, res) {
    const { firstName, lastName, email, user, password, confirmPassword } = req.body;

    const response = {
      data: {},
      message: '',
      error: false
    };

    if (!verifyEmail(email)) {
      return res.status(400).json({
        Response: 'Por favor, preencha o campo e-mail corretamente.',
      });
    }

    if (!verifyConfirmPassword(password, confirmPassword)) {
      return res.status(400).json({
        Response: "Por favor, insira senhas válidas!"
      })
    }

    const pw = crypto.createHash('sha256')
      .update(password)
      .digest('hex');

    try {
      await db('doctor')
        .insert({ firstName: firstName, lastName: lastName, user: user,  email: email, password: pw})
        .then((user) => {
          const insertedId = user[0];
          var jwt = require('jsonwebtoken');
          var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    
          res.status(200).json({ 
            'message': 'Usuário autorizado com sucesso',
            'user_id': insertedId,
            'token': token
          });
        })
        .catch(err => {
          response.message = 'Erro ao criar usuário';
          response.error = true;
          response.data = err
        });

      if(response.data.errno == 1062){
        return res.status(400).json({
          'message': 'E-mail ou usuário já cadastrado no sistema'
       });
      }

      if (response.error == true) {
        return res.status(500).json({
           'message': response.message,
           'error': response.data
        });
      }
    } catch (error) {
      res.status(500).json({ 'error': error });
    }
  };

  async userLogin(req, res) {
    const { user, password } = req.body;
    const pw = crypto.createHash('sha256')
      .update(password)
      .digest('hex');

    try {
      const result = await db('doctor')
        .select('*')
        .where('user', user);
     
      if (!result[0] || result[0].password != pw) {
        return res.status(401).json({ 'message': 'Usuário ou senha incorretos' });
      }

      const { password, ...loggedUser } = result[0];

      var jwt = require('jsonwebtoken');
      var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
  
      res.status(200).json({ 
        'message': 'Usuário autorizado com sucesso',
        'user_id': loggedUser.id_doctor,
        'token': token  
      });
    } catch (error) {
      return res.status(500).json({
        'message': 'Ocorreu um erro inesperado',
        'error': error
      });
    }   
  }
}

export default DoctorController;