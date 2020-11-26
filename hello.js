function hello() {
  // TODO: Make this return "Hello World!"
  var greeting = "Hello ";
  return greeting.concat("world!")
}

if (typeof module !== "undefined") {
    module.exports = hello;
} else {
    document.write(hello());
}
