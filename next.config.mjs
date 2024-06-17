/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"www.benefithub.com",
                protocol:"https"
            }
        ]
    }
};

export default nextConfig;
