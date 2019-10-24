/**
 * @file Sample unit test for Enmesh module.
 */

import { resolve } from 'path';

import { ApolloModule } from '@enmesh/apollo';
import { Enmesh, EnmeshModule } from '@enmesh/core';
import { PagesModule } from '@enmesh/pages';
import { WebserverModule } from '@enmesh/webserver';

const testPagePath = resolve(__dirname, '../../build/testpages');

const name = '';
const port = 4000;

const pageName1 = `${name}Page1`;
const webServerName1 = `${name}WebServer`;
const title = `${name} Title`;

const pageList = {
  [webServerName1]: {
    [pageName1]: {
      title,
      pageName: pageName1,
      pagePath: testPagePath,
    },
  },
};

const enmesh = new Enmesh();
const webserver = new WebserverModule();
const pages = new PagesModule();
const apollo = new ApolloModule();

const enmeshInitModules = [
  [
    webserver,
    {
      [webServerName1]: {
        port,
      },
    },
  ],
  [
    pages,
    {
      pages: pageList,
      pagesFolder: 'build/pages',
    },
  ],
  [
    apollo,
    {
      servers: {
        [webServerName1]: {
          schemata: {
            typeDefs: `
                  type Query {
                    testQuery: String!
                  }
                `,
            resolvers: {
              Query: {
                testQuery: () => 'Hello World!',
              },
            },
          },
          queries: {},
        },
      },
    },
  ],
];

(async () => {
  await enmesh.init(enmeshInitModules);
  await enmesh.webserver[webServerName1].start();
})();
