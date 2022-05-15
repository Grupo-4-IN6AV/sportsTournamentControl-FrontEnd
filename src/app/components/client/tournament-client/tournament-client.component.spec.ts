import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentClientComponent } from './tournament-client.component';

describe('TournamentClientComponent', () => {
  let component: TournamentClientComponent;
  let fixture: ComponentFixture<TournamentClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
