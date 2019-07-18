import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDisplayComponent } from './poke-display.component';

describe('PokeDisplayComponent', () => {
  let component: PokeDisplayComponent;
  let fixture: ComponentFixture<PokeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
