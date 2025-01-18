import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyTermOfUseComponent } from './policy-term-of-use.component';

describe('PolicyTermOfUseComponent', () => {
  let component: PolicyTermOfUseComponent;
  let fixture: ComponentFixture<PolicyTermOfUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyTermOfUseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyTermOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
