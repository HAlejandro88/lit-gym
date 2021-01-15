import { stub } from 'sinon';
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

    it('show hello World in the component',async () => {
        const template = `
            <h1>Hello World</h1>
            <h6> el contador es 0</h6>
            <button>click</button>
        `;
        const element = (await fixture(html`<first-test></first-test>`));
        expect(element).to.shadowDom.to.equal(template)
    });

    it('label property is empty', async () => {
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


    it('calls myFunction when a button is clicked', async () => {
        const el = await fixture(html`<first-test></first-test>`);
        const myFunctionStub = stub(el, 'increment');
        el.requestUpdate();
        await el.updateComplete;
        el.shadowRoot.querySelector('button').click();
        expect(myFunctionStub).to.have.callCount(1);
    });

    it('incremeta en uno cuando se le da click al boton', async () => {
        const element = await fixture(html`<first-test></first-test>`);
        element.requestUpdate();
        await element.updateComplete;
        element.shadowRoot.querySelector('button').click();
        expect(element.count).to.equal(1);
    })

})

// TODO: TEST COMPONENT IN FIRSTUPDATE, FETCH, CUSTOMEVENTS, FUNCTIONS


