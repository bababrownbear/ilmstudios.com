import { Ilmstudios.ComPage } from './app.po';

describe('ilmstudios.com App', () => {
  let page: Ilmstudios.ComPage;

  beforeEach(() => {
    page = new Ilmstudios.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
