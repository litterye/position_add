var express = require('express');
let router = express.Router();

const multer = require('multer');
const path = require('path');

const positionAddController = require('../controller/position.add');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/upload'))
    },
    filename: function(req, file, cb) {
        let fileStr = file.originalname;
        let docIndex = file.originalname.indexOf('.');
        let fileEnd = fileStr.substr(docIndex);
        req.abc = 'yjf';
        let fileName = file.filename + '-' + Date.now() + fileEnd;
        req.fileName = fileName;
        cb(null, fileName);
    }
})

let upload = multer({ storage: storage });

router.route('/add')
    .post(upload.single('companyLogo'), (req, res, next) => {
        positionAddController.add({ req, res, next });
    })
    .get((req, res, next) => {
        res.send('get');
    })

router.route('/find')
    .get((req, res, next) => {
        positionAddController.find({ req, res, next });
    })

router.route('/remove')
    .delete((req, res, next) => {
        positionAddController.remove({ req, res, next });
    })

module.exports = router;