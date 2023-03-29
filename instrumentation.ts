import { registerOTel } from "@vercel/otel";

export function register() {
  console.log("calling register");
  registerOTel("with-opentelemetry-deploy");
}
