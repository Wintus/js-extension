const methodDescriptor = {
  value: undefined, // overwrite
  writable: true,
  enumerable: false, // hidden
  configurable: true
};

const defineMethod = (klass, method) => {
  Object.defineProperty(klass.prototype, method.name, {
    ...methodDescriptor,
    value: method
  });
};

const defineProperties = (klass, props) => {
  Object.entries(props).forEach(([name, value]) => {
    Object.defineProperty(klass.prototype, name, {
      ...methodDescriptor,
      value
    });
  });
};

defineMethod(Function, function extension(props) {
  defineProperties(this, props);
});
