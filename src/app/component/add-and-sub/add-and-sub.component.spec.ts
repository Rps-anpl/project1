import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndSubComponent } from './add-and-sub.component';

describe('AddAndSubComponent', () => {
  let component: AddAndSubComponent;
  let fixture: ComponentFixture<AddAndSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAndSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
