import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesAdminComponent } from './matches-admin.component';

describe('MatchesAdminComponent', () => {
  let component: MatchesAdminComponent;
  let fixture: ComponentFixture<MatchesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
