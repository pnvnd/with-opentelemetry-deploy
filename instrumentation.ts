export function register() {
  if (process.env.NEXT_RUNTIME === "node") {
    const { registerOTel } = require("@vercel/otel/dist/index.node");
    registerOTel("with-opentelemetry-deploy");
  }
}
