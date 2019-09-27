import "./extension";

Object.extension({
  map(f: (value: [string, unknown]) => readonly [PropertyKey, unknown]) {
    return Object.fromEntries(Object.entries(this).map(f));
  },
});
