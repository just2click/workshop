import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecMovesPreviewComponent } from './spec-moves-preview.component';

describe('SpecMovesPreviewComponent', () => {
  let component: SpecMovesPreviewComponent;
  let fixture: ComponentFixture<SpecMovesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecMovesPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecMovesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
