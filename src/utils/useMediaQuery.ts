import { useMediaQuery as useMediaQueryClientSide } from "@uidotdev/usehooks";
import { screens } from "../../tailwind.config.mjs";

type Breakpoint = keyof typeof screens;

const useMediaQuery = ({
  maxWidth,
  minWidth,
}: {
  maxWidth?: Breakpoint;
  minWidth?: Breakpoint;
}): boolean => {
  if (typeof window === "undefined") return true;
  const query = maxWidth
    ? `(max-width: ${screens[maxWidth]})`
    : `(min-width: ${screens[minWidth]})`;
  return useMediaQueryClientSide(query);
};

export default useMediaQuery;
