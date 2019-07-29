import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsformComponent } from './contactsform.component';

describe('ContactsformComponent', () => {
  let component: ContactsformComponent;
  let fixture: ComponentFixture<ContactsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
