import { useEffect } from "react";

export default function useScrollToTop(dependencies = []) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, dependencies);
}
