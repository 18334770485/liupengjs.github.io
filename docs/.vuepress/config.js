module.exports = {
    title: '刘鹏的个人博客',
    themeConfig: {
      nav: [
        {text: '首页', link: '/'},
        {text: '个人随笔', items:[
            {text: 'css', link: '/word/css/'},
            {text: 'js', link: '/word/js/'},
            {text: 'html', link: '/word/html/'},
            {text: 'linux', link: '/word/linux/'},
            {text: 'windows', link: '/word/windows/'},
        ]},
        {text: '参考文档', items:[
          {text: '葛平', link: '/geping/'},
          {text: '元首', link: '/yuanshou/'}
        ]},
        {text: '参考文档', link: 'http://hujiashi.top'}
      ],
      sidebar: {
        '/word/': [
            '',     /* /foo/ */
            {
                title: 'css',   // 必要的
                path: '/word/css',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/word/css/阅读css世界笔记',
                ]
            },{
              title: 'html',   // 必要的
              path: '/word/html',      // 可选的, 应该是一个绝对路径
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                  '/word/html/document属性和方法总结',
                  '/word/html/web前端常用名词',
              ]
          },{
                title: 'javascript',   // 必要的
                path: '/word/js',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/word/js/基于webpack4+和react16+从零开始搭建脚手架',
                    '/word/js/静态文件压缩工具gulp',
                    '/word/js/数组的33种基本方法',
                    '/word/js/javascript 数据类型',
                    '/word/js/javascript script属性和注意事项',
                    '/word/js/javascript解决跨越（同源策略）的三种方案',
                    '/word/js/json-server使用',
                ]
            },{
              title: 'linux',   // 必要的
              path: '/word/linux',      // 可选的, 应该是一个绝对路径
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                  '/word/linux/常用linux命令',
                  '/word/linux/linux下安装mysql',
                  '/word/linux/linux下搭建nginx并配置网站',
              ]
            },{
              title: 'windows',   // 必要的
              path: '/word/windows',      // 可选的, 应该是一个绝对路径
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                  '/word/windows/node版本管理器nvm在windows下安装',
              ]
          }
          ],
      }
  },
  plugins: ['@vuepress/active-header-links']
}