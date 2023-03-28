import { trace } from "@vercel/otel";
import { tracer as customTracer, context } from "../instrumentation-custom";

export async function fetchGithubStars() {
  return await trace
    .getTracer("nextjs-example")
    .startActiveSpan("fetchGithubStars", async (span) => {
      try {
        const span = customTracer.startSpan(
          "handler",
          undefined,
          context.active()
        );
        const res = await fetch("https://api.github.com/repos/vercel/next.js", {
          next: {
            revalidate: 0,
          },
        });
        const data = await res.json();
        return data.stargazers_count;
      } finally {
        span.end();
      }
    });
}
