import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xE4bE86dE7F7aBf2753863b424429C224333cc2bc",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Full Cup O' Yotsuba",
        description: "Don't sip to fast!",
        image: readFileSync("scripts/assets/yotsuba.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()