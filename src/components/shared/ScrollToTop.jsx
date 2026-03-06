import { useLocation } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useScrollToTop([pathname]);
  return null;
}
