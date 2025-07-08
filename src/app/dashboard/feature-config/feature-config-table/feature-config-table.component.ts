import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LogList } from '../../../interfaces/dashboard.interface';

@Component({
  selector: 'app-feature-config-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-config-table.component.html',
  styleUrl: './feature-config-table.component.css',
  host:{
    class: 'feature-config-table'
  }
})
export class FeatureConfigTableComponent implements OnInit {

    configurationData!: LogList;


    ngOnInit(): void {
      const logSelected  = sessionStorage.getItem('configurationUsed');

      if(logSelected){
      this.configurationData = JSON.parse(logSelected);
      }
    }

    clearStorage(): void {
      sessionStorage.removeItem('configurationUsed');
      sessionStorage.removeItem('accessFeatureConfigParameter');
    }


}
