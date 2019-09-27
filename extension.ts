type Class = FunctionConstructor;

const methodDescriptor: PropertyDescriptor = {
  value: undefined, // overwrite
  writable: true,
  enumerable: false, // hidden
  configurable: true,
};

interface Props {
  [key: string]: unknown;
  [key: number]: unknown;
}
type PropMap = {
  [key: string]: Props;
  [key: number]: Props;
};

type Method<T> = (this: T, ...args: any[]) => unknown;

const defineMethod = <T extends Class>(klass: T, method: Method<T>) => {
  Object.defineProperty(klass.prototype, method.name, {
    ...methodDescriptor,
    value: method,
  });
};

const defineProperties = <T extends Class>(klass: T, props: Props) => {
  Object.entries(props).forEach(([name, value]) => {
    Object.defineProperty(klass.prototype, name, {
      ...methodDescriptor,
      value,
    });
  });
};

interface Function {
  extension(props: Props): void;
}

defineMethod(Function, function extension(this: Class, props: Props) {
  defineProperties(this, props);
});
