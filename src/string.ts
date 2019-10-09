import "./extension";

declare global {
  interface String {
    codePoints(): number[];
  }
}

String.extension({
  codePoints(this: String) {
    return [...this].map(s => s.codePointAt(0) as number);
  },
});
