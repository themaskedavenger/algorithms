/* eslint-disable import/no-extraneous-dependencies */
/**
 * @file Sample unit test for Enmesh module.
 */

import test from 'ava';

import { resolve } from 'path';
import puppeteer from 'puppeteer';

import { ApolloModule } from '@enmesh/apollo';
import { Enmesh, EnmeshModule } from '@enmesh/core';
import { PagesModule } from '@enmesh/pages';
import {
  assertPageContains,
  assertStringContains,
  assertStringDoesNotContain,
} from '@enmesh/testutils/assertions';
import { afterAlwaysAsync } from '@enmesh/testutils/test';
import { WebserverModule } from '@enmesh/webserver';

let browser;

const testPagePath = resolve(__dirname, '../../build/testpages');

test.before(async t => {
  browser = await puppeteer.launch();
});

test.after.always(async t => {
  await afterAlwaysAsync(
    [
      browser.close(),
    ],
    {},
  );
});

test('Sample test', async t => {
  const name = '';
  const port = 3000;

  const pageName1 = `${name}Page1`;
  const webServerName1 = `${name}WebServer`;
  const title = `${name} Title`;
  const pageUrl1 = `http://localhost:${port}/${pageName1}`;

  let page1;

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

  await enmesh.init(enmeshInitModules);
  await enmesh.webserver[webServerName1].start();

  page1 = await assertPageContains(
    t,
    [name, 'Req1'],
    browser,
    pageUrl1,
    {
      stringContains: [],
      stringDoesNotContain: [],
      // tslint:disable-next-line:no-console
      consoleFn: msg => console.log(msg.text()),
      defaultTimeout: 2000,
    },
  );

  await page1.click('#');
  await page1.type('#', 'a');
  await page1.waitForSelector('', { timeout: 1000 });

  page1 = await assertPageContains(
    t,
    [name, 'Req1', 'FirstClick'],
    page1,
    null,
    {
      stringContains: [],
      stringDoesNotContain: [],
    },
  );
});
