const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: process.env.mongodb_username,
        mongodb_password: process.env.mongodb_password,
        mongodb_cluster: process.env.mongodb_cluster,
        mongodb_database: process.env.mongodb_database,
        stripe_key: process.env.stripe_key,
        NEXTAUTH_URL: "http://localhost:3000/api/auth",
      },
      images: {
        domains: ["fakestoreapi.com"],
      },
    };
  }
  return {
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
  };
};
