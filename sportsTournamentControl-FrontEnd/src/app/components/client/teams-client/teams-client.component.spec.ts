import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsClientComponent } from './teams-client.component';

describe('TeamsClientComponent', () => {
  let component: TeamsClientComponent;
  let fixture: ComponentFixture<TeamsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
