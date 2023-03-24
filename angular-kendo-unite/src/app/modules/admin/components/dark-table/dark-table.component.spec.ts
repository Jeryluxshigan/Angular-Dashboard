import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkTableComponent } from './dark-table.component';

describe('DarkTableComponent', () => {
  let component: DarkTableComponent;
  let fixture: ComponentFixture<DarkTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
