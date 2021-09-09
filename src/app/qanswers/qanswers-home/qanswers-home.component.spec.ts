import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QanswersHomeComponent } from './qanswers-home.component';

describe('QanswersHomeComponent', () => {
  let component: QanswersHomeComponent;
  let fixture: ComponentFixture<QanswersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QanswersHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QanswersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
