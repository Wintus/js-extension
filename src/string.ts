import "./extend";

declare global {
  interface String {
    codePoints(): number[];
  }
}

String.extend({
  codePoints(this: String) {
    return [...this].map(s => s.codePointAt(0) as number);
  },
});
