/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',         // Export static files
    trailingSlash: true,      // Ensure proper URLs with trailing slash (needed for GitHub Pages)
    reactStrictMode: true,
};

export default nextConfig;
