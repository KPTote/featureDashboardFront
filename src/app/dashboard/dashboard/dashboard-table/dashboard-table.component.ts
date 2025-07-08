import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LogList } from '../../../interfaces/dashboard.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-table.component.html',
  styleUrl: './dashboard-table.component.css'
})
export class DashboardTableComponent implements OnInit {

    @Input() logList: LogList[] = []
    @Input() filterHasNotResults = false;
    @Output() logSelected = new EventEmitter<number>();

    showMobileTable = false;

    constructor(
          private readonly dashboardService: DashboardService
    ){}

    ngOnInit(): void {

console.log(this.filterHasNotResults);
      console.log(this.logList);
    }

    getAction(item: number){
      this.logSelected.emit(item);
    }


}
