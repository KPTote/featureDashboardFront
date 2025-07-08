import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { LogList } from '../../interfaces/dashboard.interface';
import { AccessEnum } from '../enums/access-params.enum';
import { NavbarComponent } from '../navbar/navbar.component';
import { DashboardService } from '../services/dashboard.service';
import { DashboardTableComponent } from "./dashboard-table/dashboard-table.component";




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DashboardTableComponent, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  logList!: LogList[];
  logListClone!: LogList[];
  private regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  public filterHasNotResults = true;



  filterForm = new FormGroup({
    filterByEmail: new FormControl()
  })

    get filterByEmail() {
    return this.filterForm.get('filterByEmail');
  }

  constructor(
    private readonly dashboardService: DashboardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getLogList();
    this.filter();
  }

  filter(){

    this.filterByEmail?.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe( (data: string) => {

      if(!data){
        this.logList = [...this.logListClone];
        this.filterHasNotResults = true;
        return
      }
      this.logList = this.logListClone.filter( log => log.executedBy.toLowerCase().includes(data.toLowerCase()));

      this.filterHasNotResults = this.logList.length === 0;
    })
  }

  getLogList(): void {

    this.logList = this.route.snapshot.data?.['logList'];


    this.sortByDate();

    this.logList.forEach(log => {
      const parseDate = this.parseDate(log.dateTimeExecution);
      log.dateTimeExecution = parseDate;
    })

    this.logListClone = [...this.logList];


  }

  logSelected(logId: number): void {

    const log = this.logList.at(logId);
    sessionStorage.setItem('configurationUsed', JSON.stringify(log))
    sessionStorage.setItem(AccessEnum.FeatureConfig, AccessEnum.FeatureConfigParam)

  }

  parseDate(value: string): string {
    const date = new Date(value);
    return date.toLocaleString();
  }

  sortByDate(): void{
    this.logList.sort((a, b) => {

      const dateA = a.dateTimeExecution.split('T')[0];
      const dateB = b.dateTimeExecution.split('T')[0];

      return dateB.localeCompare(dateA);

    })
  }


}
