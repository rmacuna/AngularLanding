import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-perfomance',
  templateUrl: './perfomance.component.html',
  styleUrls: ['./perfomance.component.sass']
})
export class PerfomanceComponent implements OnInit {



  @ViewChild('target') elem: ElementRef;

  // Modelo que inicia la vista inicialmente en falso para que el test se muestre al dar click. 
  perfomanceActive: boolean;


  DEVICE_INFO: any;
  INFORMATION: any;
  DEFAULT_NUMBER = 150;

  constructor(
    private progress: NgProgress,
    private render: Renderer2,
  ) { }

  ngOnInit() {
    this.INFORMATION = [];
    this.perfomanceActive = false;
  }


  startPerfomanceTest() {
    this.progress.start();
    this.DEVICE_INFO = this.getDeviceInfo();

    setTimeout(() => {
      for (let i = 1; i <= this.DEFAULT_NUMBER; i++) {
        this.INFORMATION.push('1');
      }
      this.perfomanceActive = true;
      this.render.removeClass(this.elem.nativeElement, 'hidden');
      this.render.addClass(this.elem.nativeElement, 'show');
      this.elem.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.progress.done();
    }, 1000);
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

}
