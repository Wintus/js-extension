import "./extend";

type F<V, R> = (value: [string, V]) => [PropertyKey, R];

declare global {
  interface Object {
    map<T, U>(this: {}, f: F<T, U>): ReturnType<F<T, U>>[];
  }
}

Object.extend({
  map<T, U>(this: {}, f: F<T, U>) {
    return Object.fromEntries(Object.entries<T>(this).map(f));
  },
});
