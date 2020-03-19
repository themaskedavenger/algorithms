/**
 * @file  Enmesh module class.
 */

import { Enmesh, EnmeshModule } from '@enmesh/core';

import init from '../emitters/init';
import handler1 from '../handlers/handler1';

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
