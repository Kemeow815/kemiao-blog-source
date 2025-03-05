/**
 * 这是我个人的博客配置文件
 * 请根据文档复制 config.sample.js 文件并重命名为 config.js
 * 并修改为对应配置项
 */

export default {
  // 博客基础配置
  title: '克喵的部落格',
  subtitle: 'KeMiao\'s blog',
  description: '致力于分享资源和生活~',
  keywords: 'app, blog, resources, life, web',
  logo: './logo.svg',
  favicon16: './favicon.ico',
  favicon32: './favicon.ico',
  createdTime: '2025-03-05',
  icp: '赣ICP备202545895号-1',
  icpLink: '//beian.miit.gov.cn/',
  beian: '',
  beianLink: '',
  // 关于页二维码
  alipay_qr: 'https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%AF%E4%BB%98.jpg',
  // GitHub Issues 配置
  username: 'Kemeow815',
  repository: 'kemiao-blog',
  friendsRepo: 'kemiao-blog-friends', // 留空则默认使用上方仓库获取
  // 您的信息
  author: '克喵爱吃卤面',
  email: 'kemiao@kmblog.icu',
  link: '//luwang.info',
  github: '//github.com/Kemeow815',
  // 友链信息
  name: '克喵爱吃卤面',
  url: '//myblog.kemeow.cn',
  avatar: '//cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/kemeow815@avatar.png',
  desc: '致力于分享资源和生活~',
  // 文章相关
  pageSize: 14,
  defaultCover: '/images/cover.jpg',
  // 图片加载失败时显示，请将图片下载至你自己的存储空间，并使用自己的 CDN 引入
  errorImg: '/images/error.gif',
  // Twikoo 评论配置
  twikoo: {
    src: 'https://cdn.staticfile.org/twikoo/1.6.41/twikoo.all.min.js',
  },
}
