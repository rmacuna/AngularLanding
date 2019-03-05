import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-perfomance',
  templateUrl: './perfomance.component.html',
  styleUrls: ['./perfomance.component.sass']
})
export class PerfomanceComponent implements OnInit  {



  @ViewChild('target') elem: ElementRef;
  @ViewChild('testResults') results: ElementRef;
  @ViewChild('bodyTable') bodyTable: ElementRef;

  // Modelo que inicia la vista inicialmente en falso para que el test se muestre al dar click. 
  perfomanceActive: boolean;


  DEVICE_INFO: any;
  INFORMATION: any[];
  DEFAULT_NUMBER = 150;



  PerfomedActions: any[];



  constructor(
    private progress: NgProgress,
    private render: Renderer2,
  ) { }

  ngOnInit() {
    this.INFORMATION = [];
    this.PerfomedActions = [];
    this.perfomanceActive = false;
  }


  startPerfomanceTest() {
    this.progress.start();
    setTimeout(() => {
      for (let i = 1; i <= this.DEFAULT_NUMBER; i++) {
        this.INFORMATION.push('1');
      }
      this.perfomanceActive = true;

      // Esta es una manera de angular de manipular el documento.
      this.render.removeClass(this.elem.nativeElement, 'hidden');
      this.render.addClass(this.elem.nativeElement, 'show');
    }, 1000);
    setTimeout(() => {
      this.elem.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.progress.done();
    }, 1200);
  }

  removeCells(): void {
    this.progress.start();
    this.INFORMATION.splice(0, 100);
    setTimeout(() => {
      this.progress.done();
    }, 500);
  }

  reloadTable(): void {
      this.progress.start();
      this.progress.set(0.4);
      const startTime = performance.now();
      let endTime;
      let result;
      this.INFORMATION = [];

      setTimeout(() => {
        for (let i = 1; i <= this.DEFAULT_NUMBER; i++) {
          this.INFORMATION.push('1');
        }
         endTime = performance.now();
        result = (endTime - startTime) + ' milliseconds';
        this.storeResult('Reload Table' , result);

      }, 500);
      this.progress.done();
  }

  addNewCells(): void {
    this.progress.start();
    this.progress.set(0.4);
    for (let index = 0; index < 100; index++) {
      this.INFORMATION.push(1);
    }
    setTimeout(() => {
      this.progress.done();
    }, 500);
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
