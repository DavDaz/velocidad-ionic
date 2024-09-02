import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DavidPage } from './david.page';

describe('DavidPage', () => {
  let component: DavidPage;
  let fixture: ComponentFixture<DavidPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DavidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
