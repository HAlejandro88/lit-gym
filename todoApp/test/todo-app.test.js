import { fixture, html, expect } from '@open-wc/testing';

import '../TodoApp.js';

describe('suite case', () => {
    it("Case default", async () => {
        const _element = await fixture("<todo-app></todo-app>");
        console.log(_element);
        expect(_element.label).to.equal('');
    });
    it('should ',  async() => {
        const _element = await fixture("<todo-app></todo-app>");
        expect(_element).to.equal('')
    });
})
