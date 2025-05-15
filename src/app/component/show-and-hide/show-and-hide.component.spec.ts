import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAndHideComponent } from './show-and-hide.component';

describe('ShowAndHideComponent', () => {
  let component: ShowAndHideComponent;
  let fixture: ComponentFixture<ShowAndHideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAndHideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAndHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
