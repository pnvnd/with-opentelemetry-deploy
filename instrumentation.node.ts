import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
// import { ConsoleSpanExporter } from "@opentelemetry/sdk-trace-base";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "next-app",
  }),
  traceExporter: new OTLPTraceExporter(),
});

sdk.start();
