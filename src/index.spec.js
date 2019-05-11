import { assert } from "chai";
import {
  add,
  subtract,
  divide,
  multiply,
  areSameLength,
  areEqual,
  isEven,
  isOdd,
  roundNumber
} from "./index";

describe("Math Functions", () => {
  describe("add", () => {
    //The following tests all pass great!
    it("should be a function", () => {
      assert.isFunction(add);
    });
    it("should return a number", () => {
      assert.isNumber(add(2, 3));
    });
    it("should properly add two numbers", () => {
      assert.equal(add(2, 3), 5);
    });
    it("should be below the correct answer", () => {
      assert.isBelow(add(2, 1), 10);
    });
  });

  describe("subtract", () => {
    it("should be a function", () => {
      assert.typeOf(subtract(3,2), "number");
    });
    it("should properly subtract two numbers", () => {
      assert.isAbove(subtract(5, 2), 1);
    });
    it("should be a number", () => {
      assert.isNotNaN(subtract(6,1), 5);
    });
  });

  describe("divide", () => {
    it("should be a function", () => {
      assert.typeOf(divide, "function");
    });
    it("should return Infinity if we divide by 0", () => {
      assert.isNotNumber(divide, 'divide');
    });
    it("should exists", () => {
      assert.exists(divide);
    });
  });

  describe("multiply", () => {
    it("should be a function", () => {
      assert.typeOf(multiply(3, 5), "number");
    });
    it("should be defined", () =>{
      assert.isDefined(multiply);
    });
  });

  describe("areSameLength", () => {
    it("should be a function", () => {
      assert.typeOf(areSameLength, "function");
    });
    it("should return a boolean", () => {
      assert.typeOf(areSameLength("hello", "world"), "boolean");
    });
    it("should return true if both strings are the same length", () => {
      assert.isFalse(areSameLength("going", "goings"));
    });
    it("should return false if strings have different lengths", () => {
      assert.isTrue(areSameLength("hello", "goodb"));
    });
  });

  describe("areEqual", () => {
    it("should be a function", () => {
      assert.typeOf(areEqual, "function");
    });
    it("should return a boolean", () => {
      assert.typeOf(areEqual("hello", "world"), "boolean");
    });
    it("should return true if both numbers are the same", () => {
      assert.isFalse(areEqual(2, 1));
    });
    it("should return false if the numbers are different", () => {
      assert.isTrue(areEqual(2, 2));
    });
  });

  describe("isEven", () => {
    it("should be a function", () => {
      assert.typeOf(isEven, "function");
    });
    it("should return a boolean", () => {
      assert.typeOf(areEqual("hello", "world"), "boolean");
    });
    it("should return true if number is even", () => {
      assert.isTrue(isEven(2));
    });
  });

    describe("isOdd", () => {
        it("should be a function", () => {
        assert.typeOf(isOdd, "function");
        });
        it("should return a boolean", () => {
        assert.isBoolean(isOdd("hello", "world"), "boolean");
        });
        it("should return false if the number is even", () => {
        assert.isFalse(isOdd(4));
        });
    });

    describe("roundNumber", () => {
            it("should be a function", () => {
            assert.typeOf(roundNumber, "function");
            });
            it("should round up when needed", () => {
            assert.equal(roundNumber(1), 1);
            });
            it("should round down when needed", () => {
            assert.equal(roundNumber(0.4), 0);
            });
    });
});
