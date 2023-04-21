const bucket = new Map();

// 封装一个响应式对象
const reactive = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  // 判断 obj 是否已经是响应式对象，如果是则直接返回
  if (obj["__v_isReactive"]) {
    return obj;
  }
  const proxy = new Proxy(obj, {
    get(target, key) {
      return Reflect.get(target, key);
    },
    set(target, key, val) {
      const result = Reflect.set(target, key, val);
      return result;
    },
  });
};

const ref = (value = null, method = false, funName) => {
  const proxy = new Proxy(
    { value },
    {
      get(data, key) {
        if (funName) bucket.set(funName, method); // 添加到集合中

        return Reflect.get(data, key);
      },
      set(data, key, val) {
        Reflect.set(data, key, val);

        if (funName) {
          setTimeout(() => {
            bucket.forEach((value) => {
              value();
            });
            bucket.clear();
          });
        }

        return true;
      },
    },
  );

  return proxy;
};

export { ref };
