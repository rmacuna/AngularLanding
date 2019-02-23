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

  constructor(
    private progress: NgProgress,
    private render: Renderer2,
  ) { }

  ngOnInit() {
    this.perfomanceActive = false;
  }


  startPerfomanceTest(element: HTMLElement) {
    this.progress.start();
    setTimeout(() => {
      this.perfomanceActive = true;
      this.render.addClass(this.elem.nativeElement, 'hidden');
      this.render.addClass(this.elem.nativeElement, 'show');
      this.elem.nativeElement.scrollIntoView({behavior: 'smooth'});
      this.progress.done();
    }, 1500);
  }

}
