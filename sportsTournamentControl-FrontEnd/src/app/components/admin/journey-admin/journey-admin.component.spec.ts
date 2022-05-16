import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyAdminComponent } from './journey-admin.component';

describe('JourneyAdminComponent', () => {
  let component: JourneyAdminComponent;
  let fixture: ComponentFixture<JourneyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
