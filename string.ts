import "./extension";

String.extension({
  codePoints() {
    return [...this].map(s => s.codePointAt(0));
  }
});
