// Import Jest globals explicitly (Jest 30+ ESM)
import { jest, describe, it, expect, beforeEach } from "@jest/globals";
// Import your throttle util (add .js extension for ESM)
import throttle from "../src/utils/throttle.js";

jest.useFakeTimers();

describe("throttle", () => {
  let mockFn;
  let throttledFn;

  beforeEach(() => {
    mockFn = jest.fn();
    throttledFn = throttle(mockFn, 200);
  });

  it("should call immediately on first invoke", () => {
    throttledFn("hello");

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("hello");
  });

  it("should not call again within the interval", () => {
    throttledFn("first");
    throttledFn("second");

    expect(mockFn).toHaveBeenCalledTimes(1);

    // advance only 199ms
    jest.advanceTimersByTime(199);
    throttledFn("third");

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should call again after interval passes", () => {
    throttledFn("first");
    jest.advanceTimersByTime(200);

    throttledFn("second");

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenLastCalledWith("second");
  });

  it("should preserve 'this' context", () => {
    const obj = {
      value: 42,
      fn(x) {
        return this.value + x;
      },
    };

    const spy = jest.fn(obj.fn);
    const throttled = throttle(spy, 100);

    throttled.call(obj, 8);

    expect(spy).toHaveBeenCalledWith(8);
    expect(spy.mock.instances[0]).toBe(obj);
  });
});
