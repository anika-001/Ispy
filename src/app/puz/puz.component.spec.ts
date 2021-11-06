import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzComponent } from './puz.component';

describe('PuzComponent', () => {
  let component: PuzComponent;
  let fixture: ComponentFixture<PuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
