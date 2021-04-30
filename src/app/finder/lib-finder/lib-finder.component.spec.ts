import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFinderComponent } from './lib-finder.component';

describe('LibFinderComponent', () => {
  let component: LibFinderComponent;
  let fixture: ComponentFixture<LibFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
