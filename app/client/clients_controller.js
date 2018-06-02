import express from 'express';

const ClientsController = express.Router();

ClientsController.get('/', (req, res) => {
  const objRes = { msg: 'Clients Controller' };
  res.json(objRes);
});

export default ClientsController;
