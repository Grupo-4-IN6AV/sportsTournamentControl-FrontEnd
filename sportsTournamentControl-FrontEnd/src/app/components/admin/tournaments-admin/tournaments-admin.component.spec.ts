import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsAdminComponent } from './tournaments-admin.component';

describe('TournamentsAdminComponent', () => {
  let component: TournamentsAdminComponent;
  let fixture: ComponentFixture<TournamentsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
