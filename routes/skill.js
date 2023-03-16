var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')
/* GET users listing. */
router.get('/new', skillsCtrl.new);
router.post('/', skillsCtrl.create);
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.delete('/:id', skillsCtrl.delete);



module.exports = router;