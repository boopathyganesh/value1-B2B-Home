/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"www.benefithub.com",
                protocol:"https"
            },
            {
                hostname:"inrdeals.sgp1.cdn.digitaloceanspaces.com",
                protocol:"https"
            },
        ]
    }
};

export default nextConfig;
