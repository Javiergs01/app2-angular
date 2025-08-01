import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primero } from './primero';

describe('Primero', () => {
  let component: Primero;
  let fixture: ComponentFixture<Primero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Primero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Primero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
