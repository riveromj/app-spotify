import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadiaPlayerComponent } from './madia-player.component';

describe('MadiaPlayerComponent', () => {
  let component: MadiaPlayerComponent;
  let fixture: ComponentFixture<MadiaPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadiaPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadiaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
