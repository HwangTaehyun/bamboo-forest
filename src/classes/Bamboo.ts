import { App, ExpressReceiver } from "@slack/bolt";
import { SLACK_BOT_TOKEN } from "../utils/env";

import { applyBambooMessage } from "../commands/message";
import { applyBambooThread } from "../commands/thread";
import { applyBambooCommon } from "../commands/common";

export class Bamboo {
  private app: App;

  constructor({ expressReceiver }: { expressReceiver: ExpressReceiver }) {
    console.log("--------------------");
    console.log(SLACK_BOT_TOKEN);
    console.log("--------------------");

    this.app = new App({
      token: SLACK_BOT_TOKEN,
      receiver: expressReceiver,
    });
  }

  public applyBambooMessage() {
    applyBambooMessage(this.app);
    return this;
  }

  public applyBambooThread() {
    applyBambooThread(this.app);
    return this;
  }

  public applyBambooCommon() {
    applyBambooCommon(this.app);
    return this;
  }
}
