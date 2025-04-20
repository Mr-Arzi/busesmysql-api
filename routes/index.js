const { Router } = require('express');
const busController = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('API de Autobuses 🚌'));

router.get('/buses', busController.getAllBuses);
router.post('/buses', busController.createBus);
router.put('/buses/:id', busController.updateBus);
router.delete('/buses/:id', busController.deleteBus);

module.exports = router;

