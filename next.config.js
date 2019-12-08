module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/{reponame}" : "",
  webpack: config => {
    config.node = {
      fs: "empty"
    };
    return config;
  }
};
