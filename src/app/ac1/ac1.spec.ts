import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac1 } from './ac1';

describe('Ac1', () => {
  let component: Ac1;
  let fixture: ComponentFixture<Ac1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ac1],
    }).compileComponents();

    fixture = TestBed.createComponent(Ac1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
