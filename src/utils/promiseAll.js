const promiseAll = (promises) => {
  return Promise((resolve, reject) => {
    let result = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          result[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });

    if (promises.length === 0) {
      resolve([]); // edge case
    }
  });
};

export default promiseAll;
