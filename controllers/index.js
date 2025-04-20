const models = require("../database/models");

// Crear autobús
const createBus = async (req, res) => {
  console.log('creating bus');
  try {
    const bus = await models.Bus.create(req.body);
    return res.status(201).json({ bus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Eliminar autobús
const deleteBus = async (req, res) => {
  console.log('deleting bus...');
  try {
    const bus = await models.Bus.findOne({ where: { id: req.params.id } });
    if (bus) {
      await bus.destroy();
      return res.status(200).json({ deleted: req.params.id });
    } else {
      return res.status(404).json({ error: `Bus ${req.params.id} no existe` });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

// Actualizar autobús
const updateBus = async (req, res) => {
  console.log('updating bus...');
  try {
    const bus = await models.Bus.findOne({ where: { id: req.params.id } });
    if (bus) {
      bus.plate = req.body.plate;
      bus.brand = req.body.brand;
      bus.model = req.body.model;
      bus.year = req.body.year;
      bus.status = req.body.status;
      bus.comments = req.body.comments;
      await bus.save();
      return res.status(200).json({ updated: bus });
    } else {
      return res.status(404).json({ error: `Bus ${req.params.id} no existe` });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

// Obtener todos los autobuses
const getAllBuses = async (req, res) => {
  console.log('getting buses');
  try {
    const buses = await models.Bus.findAll();
    return res.status(200).json({ buses });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createBus,
  getAllBuses,
  deleteBus,
  updateBus
};

