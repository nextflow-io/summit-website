import data from "./sessionize";
import { parseSpeakers, type Speaker } from "./speakerUtils";
export type { Speaker };

const boston = parseSpeakers(data.boston.speakers, data, "boston", true);
const barcelona = parseSpeakers(
  data.barcelona.speakers,
  data,
  "barcelona",
  true,
);

export default { boston, barcelona };
