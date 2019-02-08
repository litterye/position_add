const homeTpl = require('../views/home.html');

const homeControl = {
    render({ res }) {
        res.render(homeTpl);
    }
}

module.exports = homeControl;