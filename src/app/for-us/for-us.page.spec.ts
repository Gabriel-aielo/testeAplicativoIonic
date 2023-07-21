import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForUsPage } from './for-us.page';

describe('ForUsPage', () => {
  let component: ForUsPage;
  let fixture: ComponentFixture<ForUsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
