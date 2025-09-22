/** @type {import('next').NextConfig} */
module.exports = { 
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap'
        }
      ];
    },
    // Production optimizations
    compress: true,
    swcMinify: true,
    images: {
      domains: ['your-domain.com'], // Add your domains for image optimization
      formats: ['image/webp', 'image/avif'],
    },
    // Security headers for production
    async headers() {
      if (process.env.NODE_ENV === 'production') {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'DENY'
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
              },
              {
                key: 'Referrer-Policy',
                value: 'strict-origin-when-cross-origin'
              }
            ]
          }
        ];
      }
      return [];
    }
  };