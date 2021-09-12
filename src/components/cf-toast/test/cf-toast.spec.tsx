import { newSpecPage } from '@stencil/core/testing';
import { CfToast } from '../cf-toast';

describe('cf-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfToast],
      html: `<cf-toast></cf-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-toast>
    `);
  });
});
