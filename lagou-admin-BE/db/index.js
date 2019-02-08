//连接数据库
require('./connect/connect');
//引入进程模块
const process = require('process');
//引入骨架
const { positionAddSchema } = require('./schema/index');
//引入模型
const { positionAddModel } = require('./model/index');
//定义数据库的操作
const Mongo = {
    //增删改查
    position: {
        add(data) {
            let positionAdd = new positionAddModel(data);
            positionAddModel.find((err, res) => {
                if (!err) {
                    if (res) {
                        let flag = true;
                        res.forEach((val, index) => {
                            if (val.companyName === data.companyName && val.positionName === data.positionName) {
                                flag = false;
                                return;
                            }
                        })
                        if (flag) {
                            positionAdd.save();
                        }
                    }
                }
            })
        },
        find() {
            let p1 = positionAddModel.find({}).then(res => res);
            return p1;
        },
        remove(id) {
            const p1 = positionAddModel.findById(id, (err, res) => {
                if (!err) {
                    console.log('remove success');
                    if (res) {
                        res.remove();
                    }
                    return;
                }
            }).then(res => {
                if (res) {
                    return true;
                } else {
                    return false;
                }
            }).catch(err => false)
            return p1;
        }
    }
}

module.exports = {
    position: Mongo.position,
}