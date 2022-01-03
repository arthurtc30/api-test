const UsuarioController = require('../Controllers/UsuarioController');
module.exports = (app) => {
   app.post('/user', UsuarioController.post);
   app.put('/user/:id', UsuarioController.put);
   app.delete('/user/:id', UsuarioController.delete);
   app.get('/users', UsuarioController.get);
   app.get('/user/:id', UsuarioController.getById);
}