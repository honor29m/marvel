import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCreatorComponent } from './search-creator.component';

describe('SearchCreatorComponent', () => {
  let component: SearchCreatorComponent;
  let fixture: ComponentFixture<SearchCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
