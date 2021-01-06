import { html, fixture, expect } from '@open-wc/testing';

import '../FirstTest';

describe('one test', () => {
    it('compare with snapshot', async () => {
        const el = (await fixture(html`<first-test></first-test>`));
        expect(el).shadowDom.to.equalSnapshot();
    });

    it('expect h1 in first-test component',  async () =>{
        const el = (await fixture(html`<first-test></first-test>`));
        expect(el).lightDom.to.equal('');
    });

    it('show hellow World in the component',async () => {
        const element = (await fixture(html`<first-test></first-test>`));
        expect(element).to.shadowDom.to.equal(`<h1>Hello World</h1>`)
    });

    it('label propertie is empty', async () => {
        const element = (await fixture('<first-test></first-test>'));
        expect(element.label).to.equal('');
    });

    it('persons array lenght ', async () => {
        const element = (await fixture('<first-test></first-test>'));
        expect(element.persons).to.have.length(0);
        element.persons = ['alex','cari','leo','diego'];
        expect(element.persons).to.have.length(4);
    });

    it('label is not empty', async () => {
        const element = (await fixture('<first-test></first-test>'));
        element.label = 'alex'
        expect(element.label).to.equal('alex');
    });
})

// TODO: TEST COMPONENT IN FIRSTUPDATE, FETCH, CUSTOMEVENTS, FUNCTIONS
