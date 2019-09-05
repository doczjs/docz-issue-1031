import { createPlugin } from "docz-core";

const myPlugin = () =>
  createPlugin({
    onCreateBabelConfig({ actions }) {
      actions.setBabelPlugin({
        name: "@babel/plugin-proposal-decorators",
        options: { legacy: true }
      });
    }
  });

export default {
  plugins: [myPlugin()]
};
