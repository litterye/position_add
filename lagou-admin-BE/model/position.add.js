const { position } = require('../db/index');

const add = (data) => {
    console.log(data);

    let consequence = null;
    if (JSON.stringify(data) != '{}') {
        position.add(data);
        consequence = {
            rat: true,
            data: {
                msg: 'add sucess'
            }
        }
    } else {
        consequence = {
            rat: false,
            data: {
                msg: 'add false'
            }
        }
    }
    return JSON.stringify(consequence);
}

const find = () => {
    return position.find();
}

const remove = (id) => {
    return position.remove(id);
}

module.exports = {
    add,
    find,
    remove
}