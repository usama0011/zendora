/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGODB_URI:"mongodb+srv://usama:usama@cluster0.ekveim4.mongodb.net/?retryWrites=true&w=majority"
  },
  
}

module.exports = nextConfig
