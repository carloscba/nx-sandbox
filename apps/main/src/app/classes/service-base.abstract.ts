export abstract class ServiceBase {
  abstract getData(): string[];
  abstract setData(data: string): string[];
}