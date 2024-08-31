function log() {
  try {
    console.log.apply(console, arguments);
    console.log(console);
    console.log(arguments);
  } catch (error) {}
}
