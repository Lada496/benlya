module.exports = () => ({
  env: {
    mongodb_username: process.env.mongodb_username,
    mongodb_password: process.env.mongodb_password,
    mongodb_cluster: process.env.mongodb_cluster,
    mongodb_database: process.env.mongodb_database,
    stripe_key: process.env.stripe_key,
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
});
