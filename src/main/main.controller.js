const mainService = require('./main.service');

const findAllMainController = async (req, res) => {
  const allmain = await mainService.findAllMainService();
  console.log(allmain);
  if (allmain.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existem main cadastrados!' });
  }
  res.send(allmain);
};

const findByIdMainController = async (req, res) => {
  const idParam = req.params.id;
  const chosenMain = await mainService.findByIdMainService(
    idParam,
  );
  if (!chosenMain) {
    return res.status(404).send({ message: 'Main não encontrado' });
  }
  res.send(chosenMain);
};

const createMainController = async (req, res) => {
  const main = req.body;
  const newMain = await mainService.createMainService(
    main,
  );
  res.status(201).send(newMain);
};

const updateMainController = async (req, res) => {
  const idParam = req.params.id;
  const editMain = req.body;
  const updatedMain = await mainService.updateMainService(
    idParam,
    editMain,
  );
  res.send(updatedMain);
};

const deleteMainController = async (req, res) => {
  const idParam = req.params.id;
  await mainService.deleteMainService(idParam);
  res.send({ message: 'Main deletado com sucesso!' });
};


module.exports = {
  findAllMainController,
  findByIdMainController,
  createMainController,
  updateMainController,
  deleteMainController,
};