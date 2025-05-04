import { ConfigAPI } from '@babel/core';

export default function (api: ConfigAPI) {
  api.cache;
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
}