import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevPageComponent } from './web-dev-page.component';

describe('WebDevPageComponent', () => {
  let component: WebDevPageComponent;
  let fixture: ComponentFixture<WebDevPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
