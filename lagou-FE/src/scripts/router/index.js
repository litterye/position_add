// // const SMERouter = require('sme-router');
import SMERouter from 'sme-router'

const router = new SMERouter('router-view')

// // //引入模板
// // const homeTpl = require('../views/home.html');

// //引入控制器
const homeController = require('../controller/home.js');
const positionController = require('../controller/position.js');
const positionaddController = require('../controller/positionadd.js');
// //配置router



router.route('/index', (req, res, next) => {
    homeController.render({ req, res, next });
})

router.route('/position', (req, res, next) => {
    positionController.render({ req, res, next, router });
})

router.route('/position_add', (req, res, next) => {
    positionaddController.render({ req, res, next, router });
})

router.route('*', (req, res, next) => {
    res.redirect('/index')
})