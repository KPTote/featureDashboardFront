import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureConfigTableComponent } from './feature-config-table.component';

describe('FeatureConfigTableComponent', () => {
  let component: FeatureConfigTableComponent;
  let fixture: ComponentFixture<FeatureConfigTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureConfigTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureConfigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
