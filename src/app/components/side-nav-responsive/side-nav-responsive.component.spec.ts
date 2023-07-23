import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavResponsiveComponent } from './side-nav-responsive.component';

describe('SideNavResponsiveComponent', () => {
  let component: SideNavResponsiveComponent;
  let fixture: ComponentFixture<SideNavResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavResponsiveComponent]
    });
    fixture = TestBed.createComponent(SideNavResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
