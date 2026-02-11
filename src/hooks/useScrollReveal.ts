import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollReveal(once = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" as any });
  return { ref, isInView };
}
