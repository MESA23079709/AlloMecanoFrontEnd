import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDacceuilComponent } from './page-dacceuil.component';

describe('PageDacceuilComponent', () => {
  let component: PageDacceuilComponent;
  let fixture: ComponentFixture<PageDacceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDacceuilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDacceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
