const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "home-hub",
    projectName: "react-utils",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
    externals: ["@home-hub/react-utils"],
    devServer: {
      port: 9004,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};
