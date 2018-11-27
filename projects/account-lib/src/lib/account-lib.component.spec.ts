import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLibComponent } from './account-lib.component';

describe('AccountLibComponent', () => {
  let component: AccountLibComponent;
  let fixture: ComponentFixture<AccountLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
