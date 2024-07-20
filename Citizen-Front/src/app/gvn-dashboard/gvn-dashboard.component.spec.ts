import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GvnDashboardComponent } from './gvn-dashboard.component';

describe('GvnDashboardComponent', () => {
  let component: GvnDashboardComponent;
  let fixture: ComponentFixture<GvnDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GvnDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GvnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
