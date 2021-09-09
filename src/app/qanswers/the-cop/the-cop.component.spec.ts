import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCopComponent } from './the-cop.component';

describe('TheCopComponent', () => {
  let component: TheCopComponent;
  let fixture: ComponentFixture<TheCopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
