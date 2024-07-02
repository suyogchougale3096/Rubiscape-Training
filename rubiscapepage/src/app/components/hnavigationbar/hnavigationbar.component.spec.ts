import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnavigationbarComponent } from './hnavigationbar.component';

describe('HnavigationbarComponent', () => {
  let component: HnavigationbarComponent;
  let fixture: ComponentFixture<HnavigationbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HnavigationbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HnavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
