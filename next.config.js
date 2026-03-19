/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com'], // Add your allowed image domains here
        formats: ['image/avif', 'image/webp'], // Specify the image formats you want to support
    },
};

module.exports = nextConfig;