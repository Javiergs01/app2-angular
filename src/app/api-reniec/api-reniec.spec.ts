import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiReniec } from './api-reniec';

describe('ApiReniec', () => {
  let component: ApiReniec;
  let fixture: ComponentFixture<ApiReniec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiReniec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiReniec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
