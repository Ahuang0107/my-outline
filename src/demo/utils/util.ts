import { map } from "lodash";

export const constructQueryString = (data: Record<string, any>) =>
  map(data, (v, k) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join(
    "&"
  );
