const positionaddTpl = require('../views/position.add.html');

const positionaddControl = {
    render({ res, router }) {
        res.render(positionaddTpl);

        $('.btn-default').on('click', () => {
            //返回
            router.go('/position');
            // router.back()
        })

        $('.btn-info').on('click', () => {
            //保存发送ajax数据并返回
            this.doSubmit(router);

        })
    },
    doSubmit(router) {
        //实用jquery.form.min.js进行表单和文件上传提交
        var options = {
            'success': router.go('/position'),
            'resetForm': true,
            'dataType': 'json'
        };
        $('#yjf-form-submit').ajaxSubmit(options);
    }
}

module.exports = positionaddControl;