export function register() {
  console.log("runtime:", process.env.NEXT_RUNTIME);
  if (process.env.NEXT_RUNTIME === "nodejs") {
    require("./instrumentation-custom");
  }
}
