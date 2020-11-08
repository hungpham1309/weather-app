import { useLocation, useHistory } from "react-router";
import { useMemo, useCallback } from "react";
import { get, isFunction } from "lodash";

type Props =
  | string
  | {
      key: string;
      method: "push" | "replace";
    };

const useQueryParam = <T = any>(config: Props) => {
  let key = "";
  if (typeof config === "string") {
    key = config;
  } else {
    key = config.key;
  }

  const { search } = useLocation();

  const { push, replace } = useHistory();

  let navMethod: any;

  switch (get(config, "method")) {
    case "push": {
      navMethod = push;
      break;
    }
    case "replace": {
      navMethod = replace;
      break;
    }
    default: {
      navMethod = push;
    }
  }

  const query = useMemo(() => new URLSearchParams(search), [search]);

  const value: T = useMemo(() => {
    const result = query.get(key);
    return !!result ? result : undefined;
  }, [key, query]) as any;

  const setValue = useCallback(
    (v: T | ((prev: T | any) => T)) => {
      const value = isFunction(v) ? v(query.get(key)) : v;
      if (query.has(key)) {
        if (!!value) {
          query.set(key, value as any);
        } else {
          query.delete(key);
        }
      } else {
        if (!!value) {
          query.append(key, value as any);
        }
      }
      navMethod({
        search: query.toString(),
      });
    },
    [key, navMethod, query]
  );

  return useMemo(() => [value, setValue] as const, [value, setValue]);
};

export default useQueryParam;
