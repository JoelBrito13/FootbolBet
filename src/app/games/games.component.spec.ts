import { TestBed, async } from '@angular/core/testing';
import { GamesComponent } from './games.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GamesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GamesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FootbolBet'`, () => {
    const fixture = TestBed.createComponent(GamesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FootbolBet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GamesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('FootbolBet app is running!');
  });
});
