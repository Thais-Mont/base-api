const express = require("express");
const controllerMain = require('../main/main.controller');
const { validId, validObjectBody } = require('./main.middlewares');
const router = express.Router();

router.get(
   /*
  #swagger.description = 'Rota para mostrar todos.'
*/
  '/', controllerMain.findAllMainController);
 

router.get(
   /*
  #swagger.description = 'Rota mostra um único main.'
*/
  '/find/:id',
  validId,
  controllerMain.findByIdMainController,
);
  /*
  #swagger.description = 'Route for user authentication.'
*/

router.post(
   /*
  #swagger.description = 'Rota para criação.'
*/
  '/create',
  validObjectBody,
  controllerMain.createMainController,
);
router.put(
   /*
  #swagger.description = 'Rota de Update.'
*/
  '/update/:id',
  validId,
  validObjectBody,
  controllerMain.updateMainController,
);
router.delete(
   /*
  #swagger.description = 'Rota para deletar'
*/
  '/delete/:id',
  validId,
  controllerMain.deleteMainController,
);

module.exports = router;
