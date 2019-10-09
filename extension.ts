type Class = FunctionConstructor;
interface MethodMap<T> {
  [key: string]: Method<T>;
}
type Method<T> = (this: T, ...args: any[]) => unknown;

const methodDescriptor: PropertyDescriptor = {
  value: undefined, // overwrite
  writable: true,
  enumerable: false, // hidden
  configurable: true,
};

const defineMethod = <T extends Class>(klass: T, method: Method<T>) => {
  Object.defineProperty(klass.prototype, method.name, {
    ...methodDescriptor,
    value: method,
  });
};

const defineProperties = <T extends Class>(klass: T, methods: MethodMap<T>) => {
  Object.entries(methods).forEach(([name, value]) => {
    Object.defineProperty(klass.prototype, name, {
      ...methodDescriptor,
      value,
    });
  });
};

interface Function {
  extension<T>(methods: MethodMap<T>): void;
}

defineMethod(Function, function extension(this: Class, methods: MethodMap<Class>) {
  defineProperties(this, methods);
});
