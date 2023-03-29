module.exports = async () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    compress: true,
    swcMinify: false,
    env: {
      API_URL: process.env.API_URL,
      IS_UNDER_CONSTRUCTION: process.env.IS_UNDER_CONSTRUCTION,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
      AUTH_GOOGLE_CLIENTID: process.env.AUTH_GOOGLE_CLIENTID,
      AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET
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
