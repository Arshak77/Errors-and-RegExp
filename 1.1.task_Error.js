function reverseString(str) {
    try {
      if (typeof str === "string") {
        return str.split("").reverse().join("");
      } else {
        throw new MyError("The input must be a string");
      }
    } catch (error) {
      console.log(error);
    }
    return str;
  };

console.log(reverseString(521));