/**
 * @file  Enmesh module class.
 */

import { Enmesh, EnmeshModule } from '@enmesh/core';

import init from '../handlers/init';
import emitter1 from '../emitters/emitter1';

export default class Module extends EnmeshModule {
  public constructor() {
    super({
      name: '',
      emitters: {
        emitter1,
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
