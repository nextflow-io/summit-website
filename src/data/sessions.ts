import data from "./sessionize";
import { parseSessions } from "./sessionUtils";
export type { Session } from "./sessionUtils";

const boston = parseSessions(data.boston.sessions, data, "boston", true);
const barcelona = parseSessions(
  data.barcelona.sessions,
  data,
  "barcelona",
  true,
);

const sessionPagesBoston = boston.filter(
  (session) => !session.isServiceSession,
);

const sessionPagesBarcelona = barcelona;

export default {
  boston,
  barcelona,
};

export { sessionPagesBarcelona, sessionPagesBoston };
