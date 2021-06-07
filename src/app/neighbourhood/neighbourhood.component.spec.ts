import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighbourhoodComponent } from './neighbourhood.component';

describe('NeighbourhoodComponent', () => {
  let component: NeighbourhoodComponent;
  let fixture: ComponentFixture<NeighbourhoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeighbourhoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighbourhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
