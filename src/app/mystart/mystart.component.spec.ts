import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystartComponent } from './mystart.component';

describe('MystartComponent', () => {
  let component: MystartComponent;
  let fixture: ComponentFixture<MystartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MystartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MystartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
