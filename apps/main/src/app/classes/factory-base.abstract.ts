import { ServiceBase } from './service-base.abstract';

export abstract class FactoryBase {
  abstract getService(): ServiceBase;
}