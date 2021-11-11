import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

const options = { damping: 0.07 };

const Scroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);

  return null;
};
export default Scroll;
