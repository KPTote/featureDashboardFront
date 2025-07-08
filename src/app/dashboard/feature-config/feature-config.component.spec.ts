import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureConfigComponent } from './feature-config.component';

describe('FeatureConfigComponent', () => {
  let component: FeatureConfigComponent;
  let fixture: ComponentFixture<FeatureConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
