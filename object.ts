import "./extension";

type F = (value: [string, unknown]) => [PropertyKey, unknown];

declare global {
  interface Object {
    map(f: F): ReturnType<F>[];
  }
}

Object.extension({
  map(this: Object, f: F) {
    return Object.fromEntries(Object.entries(this).map(f));
  },
});
