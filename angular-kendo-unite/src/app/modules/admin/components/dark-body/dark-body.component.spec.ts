import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBodyComponent } from './dark-body.component';

describe('DarkBodyComponent', () => {
  let component: DarkBodyComponent;
  let fixture: ComponentFixture<DarkBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
