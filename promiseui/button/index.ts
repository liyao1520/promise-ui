import type { App } from "vue";
import Button from "./src/button";

export { Button };

export default {
  install(app: App) {
    app.component("PButton", Button);
  },
};
