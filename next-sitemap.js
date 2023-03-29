module.exports = {
  siteUrl: 'https://calculogratis.com',
  generateRobotsTxt: true,
  priority: null,
  changefreq: null,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://calculogratis.com/server-sitemap.xml']
  }
}
