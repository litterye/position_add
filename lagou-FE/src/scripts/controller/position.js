const positionTpl = require('../views/position.html');

const positionControl = {
    async render({ res, router }) {
        let listData = await this.getList().then(res => res);
        //使用art-template渲染页面
        let tpl = template.render(positionTpl, {
            data: JSON.parse(listData)
        })
        res.render(tpl);

        $('#yjf-addposition').on('click', () => {
            router.go('/position_add');
        })
        this.removeItem(res, router)
    },
    getList() {
        return $.ajax({
            type: "get",
            url: "/api/position/find",
            success: function(response) {
                return response;
            }
        });
    },
    removeItem(res, router) {
        let _this = this;
        $('tr[data-id]').on('click', '.btn-danger', function() {
            let id = $(this).parents('tr').attr('data-id');
            let companyLogo = $(this).parents('tr').attr('data-img');
            $.ajax({
                type: "delete",
                url: "/api/position/remove",
                data: {
                    id,
                    companyLogo
                },
                success: function(response) {
                    _this.render({ res, router });
                    router.go('/position');
                    console.log('delete success')
                }
            });
        })
    }
}

module.exports = positionControl;