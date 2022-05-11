import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAdminComponent } from './teams-admin.component';

describe('TeamsAdminComponent', () => {
  let component: TeamsAdminComponent;
  let fixture: ComponentFixture<TeamsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
