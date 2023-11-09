
/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');

const nextConfig = {
  reactStrictMode: true,
    experimental: {
        appDir: true,
    },    
    serverComponentsExternalPackages: ['bcrypt'],
}

module.exports = nextConfig

module.exports = withNextVideo(nextConfig);

module.exports = {
    webpack(config) {
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg'),
      )
  
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: /url/ }, // exclude if *.svg?url
          use: ['@svgr/webpack'],
        },
      )
  
      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i
  
      return config
    },
  
    images: {
        // // limit of 25 deviceSizes values
        // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // // limit of 25 imageSizes values
        // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // // limit of 50 domains values
        // domains: [],
        // // path prefix for Image Optimization API, useful with `loader`
        // path: '/_next/image',
        // // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
        // loader: 'default',
        // // file with `export default function loader({src, width, quality})`
        // loaderFile: '',
        // // disable static imports for image files
        // disableStaticImages: false,
        // // minimumCacheTTL is in seconds, must be integer 0 or more
        // minimumCacheTTL: 60,
        // // ordered list of acceptable optimized image formats (mime types)
        // formats: ['image/webp'],
        // // enable dangerous use of SVG images
        // dangerouslyAllowSVG: false,
        // // set the Content-Security-Policy header
        // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        // // sets the Content-Disposition header (inline or attachment)
        // contentDispositionType: 'inline',
        // // limit of 50 objects
        // remotePatterns: [],
        // // when true, every image will be unoptimized
        // unoptimized: false,
      },      
      // remotePatterns: [
      //   {
      //     protocol: 'https',
      //     hostname: 'assets.example.com',
      //     port: '',
      //     pathname: '/account123/**',
      //   },
      // ],
  }
  