import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FeatureConfigTableComponent } from './feature-config-table/feature-config-table.component';

@Component({
  selector: 'app-feature-config',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FeatureConfigTableComponent],
  templateUrl: './feature-config.component.html',
  styleUrl: './feature-config.component.css',
})
export class FeatureConfigComponent {

}
