import { fixture, assert } from '@open-wc/testing';

import '../TodoApp.js';

describe('suite case', () => {
    it("Case default", async () => {
        const _element = await fixture("<todo-app></todo-app>");
        assert.strictEqual(_element.hello, 'Hello World!');
    });
})
