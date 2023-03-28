export function register() {
  if (process.env.NEXT_RUNTIME === "node") {
    const { registerOTel } = require("@vercel/otel");
    registerOTel("with-opentelemetry-deploy");
    console.log("Registered OpenTelemetry for Node.js");
  }
}
