import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesClientComponent } from './matches-client.component';

describe('MatchesClientComponent', () => {
  let component: MatchesClientComponent;
  let fixture: ComponentFixture<MatchesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
