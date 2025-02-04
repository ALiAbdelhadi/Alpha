import withBundleAnalyzer from '@next/bundle-analyzer';
import withMDX from '@next/mdx';

const withMDXConfig = withMDX({
    extension: /\.mdx?$/,
});

const config = withMDXConfig(
    withBundleAnalyzer({
        enabled: process.env.ANALYZE === 'true',
    })({
        typescript: {
            ignoreBuildErrors: true,
        },
        images: {
            domains: ["utfs.io"]
        },
        reactStrictMode: true,
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
        eslint: {
            ignoreDuringBuilds: true,
        },
    })
);

export default config;
