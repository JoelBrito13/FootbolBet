import { TestBed, async } from '@angular/core/testing';
import { BetsComponent } from './bets.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BetsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BetsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FootbolBet'`, () => {
    const fixture = TestBed.createComponent(BetsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FootbolBet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BetsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('FootbolBet app is running!');
  });
});
