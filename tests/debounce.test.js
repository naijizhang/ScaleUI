// Import Jest globals explicitly (Jest 30+ with ESM projects)
import { jest, describe, it, expect, beforeEach } from "@jest/globals";
// Import your debounce util (note the .js extension for ESM)
import debounce from "../src/utils/debounce.js";

jest.useFakeTimers();

describe("debounce", () => {
  let mockFn;
  let debouncedFn;

  beforeEach(() => {
    mockFn = jest.fn();
    debouncedFn = debounce(mockFn, 200);
  });

  it("should call the function after the delay", () => {
    debouncedFn("hello");

    // should not run immediately
    expect(mockFn).not.toHaveBeenCalled();

    // advance time
    jest.advanceTimersByTime(200);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("hello");
  });

  it("should reset the timer if called again before delay", () => {
    debouncedFn("first");
    jest.advanceTimersByTime(100);

    // called again before 200ms
    debouncedFn("second");
    jest.advanceTimersByTime(199);

    expect(mockFn).not.toHaveBeenCalled();

    // now enough time
    jest.advanceTimersByTime(1);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("second");
  });

  it("should preserve 'this' context", () => {
    const obj = {
      value: 42,
      fn(x) {
        return this.value + x;
      },
    };

    const spy = jest.fn(obj.fn);
    const debounced = debounce(spy, 100);

    debounced.call(obj, 8);

    jest.advanceTimersByTime(100);

    expect(spy).toHaveBeenCalledWith(8);
    expect(spy.mock.instances[0]).toBe(obj);
  });
});
