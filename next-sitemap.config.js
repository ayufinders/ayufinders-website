/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ayufinders.com', 
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*']
};
