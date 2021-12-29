import verifyEmptyFields from '../utils/verifyEmptyFields';

function fieldsMiddleware(req, res, next) {
  let fields = [];


  if (req.url === '/login') {
    fields.push({ fieldName: 'User', value: req.body.user });
    fields.push({ fieldName: 'Password', value: req.body.password });
  } else if (req.url === '/register') {
    fields.push({ fieldName: 'Nome', value: req.body.firstName });
    fields.push({ fieldName: 'Sobrenome', value: req.body.lastName });
    fields.push({ fieldName: 'Usuario', value: req.body.user });
    fields.push({ fieldName: 'Email', value: req.body.email });
    fields.push({ fieldName: 'Senha', value: req.body.password });
    fields.push({ fieldName: 'Confirmar senha', value: req.body.confirmPassword });
  }

  const emptyFields = verifyEmptyFields(fields);

  if (emptyFields.length == 1) {
    return res
      .status(400)
      .json({ Response: `O campo ${emptyFields} não pode estar vazio` });
  } 
  else if (emptyFields.length > 1) {
    return res
      .status(400)
      .json({ Response: `Os campos ${emptyFields} não podem ser vazios` });
  } 
  else {
    next();
  }
}

export default fieldsMiddleware;
