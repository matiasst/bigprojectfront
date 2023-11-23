import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataCollectionComponent } from './user-data-collection.component';

describe('UserDataCollectionComponent', () => {
  let component: UserDataCollectionComponent;
  let fixture: ComponentFixture<UserDataCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
