import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLandingComponent } from './map-landing.component';

describe('MapLandingComponent', () => {
  let component: MapLandingComponent;
  let fixture: ComponentFixture<MapLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
