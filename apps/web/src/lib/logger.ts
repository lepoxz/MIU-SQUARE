import pino from "pino";

export const logger = pino({
  name: "miu-square-web",
  level: process.env.LOG_LEVEL ?? "info"
});
