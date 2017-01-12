import { OverwatchAngularPage } from './app.po';

describe('overwatch-angular App', function() {
  let page: OverwatchAngularPage;

  beforeEach(() => {
    page = new OverwatchAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
