const promisePool = (tasks, poolLimit = 2) => {
  let active = 0;
  const results = new Array(tasks.length);
  let i = 0;

  return new Promise((resolve, reject) => {
    const executeTask = () => {
      if (i === tasks.length && active === 0) {
        return resolve(results);
      }

      if (active < poolLimit && i < tasks.length) {
        const currentIndex = i++;
        active++;

        Promise.resolve(tasks[currentIndex]())
          .then((value) => (results[currentIndex] = value))
          .catch(reject)
          .finally(() => {
            active--;
            executeTask(); // start next one after finishing
          });
      }
    };

    // Kick off initial poolLimit tasks
    for (let j = 0; j < poolLimit && j < tasks.length; j++) {
      executeTask();
    }
  });
};
