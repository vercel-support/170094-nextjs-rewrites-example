/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/some-other-path/page-slug',
        has: [
          {
            type: 'host',
            value: '170094.preview.vercel-support.app'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
