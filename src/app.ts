import { ExpressReceiver } from "@slack/bolt";

import "./utils/env";
import { SLACK_SIGNING_SECRET } from "./utils/env";
import { Bamboo } from "./classes/Bamboo";

const expressReceiver = new ExpressReceiver({
  signingSecret: SLACK_SIGNING_SECRET,
});

const bamboo = new Bamboo({
  expressReceiver,
})
  .applyBambooCommon()
  .applyBambooMessage()
  .applyBambooThread();

console.log(bamboo);

// Start the Express server
expressReceiver.app.listen(3000, () => {
  console.log("⚡️ Bolt app is running on port 3000!");
});
