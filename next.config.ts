import type { NextConfig } from 'next';

const repo = '/chargeback-brief';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: repo,
  trailingSlash: true
};

export default nextConfig;
