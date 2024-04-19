/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        loader: 'akamai',
        path: '',
        unoptimized: true
    },
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
   
  module.exports = nextConfig