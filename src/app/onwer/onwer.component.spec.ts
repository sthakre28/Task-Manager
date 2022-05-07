import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnwerComponent } from './onwer.component';

describe('OnwerComponent', () => {
  let component: OnwerComponent;
  let fixture: ComponentFixture<OnwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnwerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
