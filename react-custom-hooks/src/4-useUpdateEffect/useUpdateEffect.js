import { useEffect, useRef } from "react";

/**
 *@deprecated
 *
 * @export
 * @param {*} callback
 * @param {*} dependencies
 */
export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
