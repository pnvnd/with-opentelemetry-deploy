import { registerOTel } from "@vercel/otel";

export function register() {
  console.log("running register");
  const val = registerOTel("with-opentelemetry-deploy");
  // const val = null;
  console.log("finished running register");
  console.log("segistered otel", val);
}
