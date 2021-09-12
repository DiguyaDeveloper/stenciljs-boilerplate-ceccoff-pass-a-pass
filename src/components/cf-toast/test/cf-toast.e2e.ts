import { newE2EPage } from '@stencil/core/testing';

describe('cf-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-toast></cf-toast>');

    const element = await page.find('cf-toast');
    expect(element).toHaveClass('hydrated');
  });
});
