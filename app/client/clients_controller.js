import express from 'express';

const ClientsController = express.Router();

ClientsController.get('/', (req, res) => {
  res.send('clients controller');
});

export default ClientsController;
