import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-perfomance',
  templateUrl: './perfomance.component.html',
  styleUrls: ['./perfomance.component.sass']
})
export class PerfomanceComponent implements OnInit {



  @ViewChild('target') elem: ElementRef;
  @ViewChild('testResults') results: ElementRef;
  @ViewChild('bodyTable') bodyTable: ElementRef;

  // Modelo que inicia la vista inicialmente en falso para que el test se muestre al dar click. 
  perfomanceActive: boolean;


  DEVICE_INFO: any;
  INFORMATION: any[];
  DEFAULT_NUMBER = 8000;
  Days: any[];


  PerfomedActions: any[];




  constructor(
    private progress: NgProgress,
    private render: Renderer2,
  ) { }

  ngOnInit() {
    this.INFORMATION = [];
    this.PerfomedActions = [];
    this.perfomanceActive = false;
    this.Days = [
      { name: 'Day 1', id: 'day1' },
      { name: 'Day 2', id: 'day2' },
      { name: 'Day 3', id: 'day3' },
      { name: 'Day 4', id: 'day4' },
      { name: 'Day 5', id: 'day5' },
      { name: 'Day 6', id: 'day6' },
      { name: 'Day 7', id: 'day7' },
      { name: 'Day 8', id: 'day8' },
      { name: 'Day 9', id: 'day9' },
      { name: 'Day 10', id: 'day10' },
      { name: 'Day 11', id: 'day11' },
      { name: 'Day 12', id: 'day12' },
      { name: 'Day 13', id: 'day13' },
      { name: 'Day 14', id: 'day14' },
      { name: 'Day 15', id: 'day15' },
      { name: 'Day 16', id: 'day16' },
      { name: 'Day 17', id: 'day17' },
      { name: 'Day 18', id: 'day18' },
      { name: 'Day 19', id: 'day19' },
      { name: 'Day 20', id: 'day20' },
      { name: 'Day 21', id: 'day21' },
      { name: 'Day 22', id: 'day22' },
      { name: 'Day 23', id: 'day23' },
      { name: 'Day 24', id: 'day24' },
      { name: 'Day 25', id: 'day25' },
      { name: 'Day 26', id: 'day26' },
      { name: 'Day 27', id: 'day27' },
      { name: 'Day 28', id: 'day28' },
      { name: 'Day 29', id: 'day29' },
      { name: 'Day 30', id: 'day31' },
    ];



  }


  startPerfomanceTest() {
    this.progress.start();
    const items = [];
    for (let index = 0; index < 8000; index++) {
      items[index] = {id: index, name: '1nd'};
    }
    this.INFORMATION = items;
    this.progress.done();
    this.perfomanceActive = true;
    // Esta es una manera de angular de manipular el documento.
    this.render.removeClass(this.elem.nativeElement, 'hidden');
    this.render.addClass(this.elem.nativeElement, 'show');

    setTimeout(() => {
      this.elem.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.progress.done();
    }, 1200);
  }

  removeCells(): void {
    this.progress.start();
    this.INFORMATION.splice(0, 100);
    this.progress.done();
  }

  reloadTable(): void {
    this.progress.start();
    this.progress.set(0.4);
    const startTime = performance.now();
    let endTime;
    let result;
    this.INFORMATION = [];
    setTimeout(() => {
      const items = [];
      for (let index = 0; index < 8000; index++) {
        items[index] = {id: index, name: '1nd'};
      }
      this.INFORMATION = items;
      endTime = performance.now();
      result = (endTime - startTime) + ' milliseconds';
      this.storeResult('Reload Table', result);

    }, 500);
    this.progress.done();
  }

  addNewCells(): void {
    this.progress.start();
    this.progress.set(0.4);
    const moreRows = [];
    for (let i = (this.INFORMATION.length + 1); i < (this.INFORMATION.length + 101); i++) {
        moreRows.push({id: i, name: '1nd' });
    }
    this.INFORMATION = this.INFORMATION.concat(moreRows);
    this.progress.done();
  }


  updateCell() {
    this.progress.start();
    this.progress.set(0.4);
    this.INFORMATION = this.INFORMATION.map(x => x.id === 5 ? {item: x.id, name: 'Up'} : x);
    this.progress.done();
  }
  showPerfomanceResults() {
    this.render.removeClass(this.results.nativeElement, 'hidden');
    this.render.removeClass(this.results.nativeElement, 'show');
    this.results.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  private storeResult(type, totalTime) {
    this.PerfomedActions.push({
      Action: type,
      time_elapsed: totalTime
    });
  }


}
