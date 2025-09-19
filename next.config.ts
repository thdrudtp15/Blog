import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
    /* config options here */
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

export default nextConfig;
