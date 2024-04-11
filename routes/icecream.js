var express = require('express');
const icecream_controller= require('../controllers/icecream');
var router = express.Router();
/* GET icecream */
router.get('/', icecream_controller.icecream_view_all_Page );
/* GET detail icecream page */
router.get('/detail', icecream_controller.icecream_view_one_Page);
module.exports = router;
/* GET create icecream page */
router.get('/create', icecream_controller.icecream_create_Page);
/* GET create update page */
router.get('/update', icecream_controller.icecream_update_Page);

/* GET delete icecream page */
router.get('/delete', icecream_controller.icecream_delete_Page);

module.exports = router