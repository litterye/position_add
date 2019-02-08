const NavUtils = {
    //定义方法
    render() {
        window.addEventListener('load', this.run.bind(this), false);
        window.addEventListener('hashchange', this.run.bind(this), false);
    },
    run() {
        this.setTitle();
        this.setNav();
    },
    setTitle() {
        const hash = location.hash.slice(1);
        // console.log(hash);
        let match = {
            '/index': ['主页', '欢迎信息！'],
            '/position': ['职位管理', '职位列表'],
            '/position_add': ['发布职位', '职位信息']
        };

        const $h1 = $('section.content-header h1');
        $h1.find('span').html(match[hash][0]);
        $h1.find('small').html(match[hash][1]);

        $('#yjf-title').html(match[hash][0]);
        $('#yjf-des').html(match[hash][1]);
    },
    setNav() {
        //激活导航
        // const hash = location.hash.slice(1);
        // const $a = $(`ul.sidebar-menu a[href='${hash}']`);
        // console.log($a.parent()[0])
        // $a.parent().addClass('active').siblings().removeClass('active');
        $(`ul.sidebar-menu li`).on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        })
    }
}

module.exports = NavUtils;