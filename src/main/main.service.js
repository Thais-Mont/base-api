const Main = require('./Main.js');

const findAllMainService = async () => {
  const allMain = await Main.find();
  return allMain;
};

const findByIdMainService = async (idParam) => {
  const oneMain = await Main.findById(idParam);
  return oneMain;
};

const createMainService = async (newMain) => {
  const createdMain = await Main.create(newMain);
  return createdMain;
};

const updateMainService = async (idParam, editMain) => {
  const updateMain = await Main.findByIdAndUpdate(
    idParam,
    editMain,
  );
  return updateMain;
};

const deleteMainService = async (idParam) => {
  return await Main.findByIdAndDelete(idParam);
};




module.exports = {
  findAllMainService,
  findByIdMainService,
  createMainService,
  updateMainService,
  deleteMainService
};