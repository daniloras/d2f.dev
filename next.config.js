module.exports = async () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    compress: true,
    swcMinify: false,
    env: {
      API_URL: process.env.API_URL,
      IS_UNDER_CONSTRUCTION: process.env.IS_UNDER_CONSTRUCTION
    },
    images: {
      unoptimized: true,
      domains: [
        'kicopa.online',
        'localhost',
        'lh3.googleusercontent.com',
        'upload.wikimedia.org'
      ]
    }
  }
  return nextConfig
}
