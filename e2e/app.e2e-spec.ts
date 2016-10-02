import { ConsumeRealDataHttpPage } from './app.po';

describe('consume-real-data-http App', function() {
  let page: ConsumeRealDataHttpPage;

  beforeEach(() => {
    page = new ConsumeRealDataHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ig works!');
  });
});
