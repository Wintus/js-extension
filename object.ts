import "./extension";

Object.extension({
  map(f) {
    return Object.fromEntries(Object.entries(this).map(f));
  }
});
