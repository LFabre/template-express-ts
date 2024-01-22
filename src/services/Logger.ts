type logArg = string | number | boolean | object | null | undefined | unknown;

export class Logger {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  info(...args: logArg[]) {
    console.info(this.prefix, ...args);
  }

  warn(...args: logArg[]) {
    console.warn(this.prefix, ...args);
  }

  error(...args: logArg[]) {
    console.error(this.prefix, ...args);
  }
}
