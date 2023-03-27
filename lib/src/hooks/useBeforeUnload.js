import { useEffect } from "react";

const useBeforeUnload = ({ when, message }) => {
  console.log(when);
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      //   event.preventDefault();
      //   event.returnValue = message;
      console.log(message);
      return message;
    };

    if (when) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [when, message]);
};

export default useBeforeUnload;
