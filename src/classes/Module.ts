/**
 * @file  Enmesh module class.
 */

import { Enmesh, EnmeshModule } from '@enmesh/core';

async function init(enmesh: Enmesh, config: any): Promise<void> {
  // Init handler
}

async function handler1(enmesh: Enmesh, emit, ...emitterParams: any[]): Promise<any> {
  // emitter function
}

export default class Module extends EnmeshModule {
  public constructor() {
    super({
      name: '',
      emitters: {
        handler1,
      },
      handlers: {
        core: {
          init,
        },
      },
      dependencies: [],
      data: {

      },
    });
  }
}
