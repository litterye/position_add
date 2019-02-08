const fs = require('fs');
const path = require('path');
const { add, find, remove } = require('../model/position.add');

const positionAddController = {
    add: ({ req, res }) => {
        req.body.companyLogo = req.fileName;
        let result = add({...req.body });
        res.render('position-add', {
            data: result
        })
    },
    find: async({ req, res }) => {
        let result = await find().then(res => res);
        res.render('position-find', {
            data: JSON.stringify(result)
        })
    },
    remove: async({ req, res }) => {
        let { id, companyLogo } = req.body;
        let result = await remove(id).then(res => res);
        if (result) {
            fs.unlink(path.resolve(__dirname, `../public/upload/${companyLogo}`), (err) => {
                if (!err) {
                    console.log('本地数据图片删除');
                }
            })
            res.render('position-remove.ejs', {
                data: JSON.stringify({
                    rat: true,
                    data: {
                        msg: 'del success'
                    }
                })
            })
        } else {
            res.render('postion-remove.ejs', {
                data: JSON.stringify({
                    rat: false,
                    data: {
                        msg: 'del false'
                    }
                })
            })
        }
    }
}

module.exports = positionAddController;