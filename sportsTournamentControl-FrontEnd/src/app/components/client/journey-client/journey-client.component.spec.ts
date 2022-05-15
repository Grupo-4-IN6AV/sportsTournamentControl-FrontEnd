import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JourneyClientComponent } from './journey-client.component';

describe('JourneyClientComponent', () => {
  let component: JourneyClientComponent;
  let fixture: ComponentFixture<JourneyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
