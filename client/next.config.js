/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_PUBLIC_ZEGO_APP_ID:1030425044,
    NEXT_PUBLIC_ZEGO_SERVER_ID:"1e73059ad0054e94fe945995a4873ed2"
  },
  images:{
    domains:["localhost"],
  },
};

module.exports = nextConfig;
