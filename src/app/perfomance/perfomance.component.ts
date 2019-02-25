import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-perfomance',
  templateUrl: './perfomance.component.html',
  styleUrls: ['./perfomance.component.sass']
})
export class PerfomanceComponent implements OnInit {



  @ViewChild('target') elem: ElementRef;
  @ViewChild('bodyTable') bodyTable: ElementRef;

  // Modelo que inicia la vista inicialmente en falso para que el test se muestre al dar click. 
  perfomanceActive: boolean;


  DEVICE_INFO: any;
  INFORMATION: any[];
  DEFAULT_NUMBER = 150;



  RANDOM_ARR_COUNTER: any[];

  constructor(
    private progress: NgProgress,
    private render: Renderer2,
  ) { }

  ngOnInit() {
    this.INFORMATION = [];
    this.RANDOM_ARR_COUNTER = [];
    this.perfomanceActive = false;
  }


  startPerfomanceTest() {
    this.progress.start();
    this.RANDOM_ARR_COUNTER = Array.from({ length: this.DEFAULT_NUMBER }, (v, k) => k + 1);
    this.DEVICE_INFO = this.getDeviceInfo();
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

  // Obtiene información del equipo en el que se esta haciendo el benchmark.
  private getDeviceInfo() {
    const INFO = [
      'Browser codename: ' + navigator.appCodeName,
      'Browser name: ' + navigator.appName,
      'Browser version: ' + navigator.appVersion,
      'Cookies Enabled: ' + navigator.cookieEnabled,
      'Platform:' + navigator.platform,
      'User-agent header: ' + navigator.userAgent
    ];
    return INFO;
  }

  paintAllCells(): void {
    this.progress.start();
    let TotalTime;

    setTimeout(() => {
      const Totaltime_start = performance.now();
      const tr_arrays = Array.prototype.slice.call(this.bodyTable.nativeElement.children);
      tr_arrays.forEach(element => {
        const td_arrays = Array.prototype.slice.call(element.children);
        td_arrays.forEach(tds => {
          const td0 = performance.now();
          this.render.addClass(tds, 'cell-active');
          const td1 = performance.now();
          const tdresult = (td1 - td0);
        });
      });
      const Totaltime_end = performance.now();
      TotalTime = Totaltime_end - Totaltime_start;
      this.progress.done();

    }, 500);


    setTimeout(() => {
      alert(TotalTime + 'milliseconds');
    }, 1000);

  }

  removeCells(): void {
    this.progress.start();
    setTimeout(() => {
      this.INFORMATION.splice(0, 100);
      this.progress.done();
    }, 500);
  }

  updateCells(): void {
      this.INFORMATION[Math.floor(Math.random() * this.INFORMATION.length)] = 'M+';
  }

  addNewCells(): void {
    this.progress.start();
    setTimeout(() => {
      for (let index = 0; index < 100; index++) {
        this.INFORMATION.push(1);
      }
      this.progress.done();
    }, 500);
  }


  activeCell(evt): void {
    const t0 = performance.now();
    const target = evt.target;
    this.render.addClass(target, 'cell-active');

    const t1 = performance.now();
    const result = (t1 - t0);
    evt.innerHTML = '';
    const elem = this.render.createText(result.toPrecision(2) + ' mill');
    this.render.appendChild(target, elem);
  }

  desactivateCell(evt): void {
    const target = evt.target.nativeElement;
    this.render.removeClass(target, 'cell-active');
  }



}
