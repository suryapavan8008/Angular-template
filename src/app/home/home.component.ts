import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('section1') section1!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  @ViewChild('section2') section2!: ElementRef;
  @ViewChild('section3') section3!: ElementRef;
  @ViewChild('section4') section4!: ElementRef;
  @ViewChild('section5') section5!: ElementRef;
  @ViewChild('section6') section6!: ElementRef;
  @ViewChild('section7') section7!: ElementRef;
  @ViewChild('section8') section8!: ElementRef; 
  @ViewChild('section9') section9!: ElementRef;

  isSidebarOpen = false;

  private hasAnimationApplied: Set<HTMLElement> = new Set();

  ngAfterViewInit() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log('Element:', entry.target);
          console.log('Is intersecting:', entry.isIntersecting);

          if (entry.isIntersecting) {
            this.applyAnimation(entry.target as HTMLElement);
          } else {
           
          }
        });
      }, {
        threshold: 0.1
      });

      
      if (this.section1) {
        observer.observe(this.section1.nativeElement);
      }

      if (this.header) {
        observer.observe(this.header.nativeElement);
      }

      if (this.section2) {
        observer.observe(this.section2.nativeElement);
      }

      if (this.section3) {
        observer.observe(this.section3.nativeElement);
      }

      if (this.section4) {
        observer.observe(this.section4.nativeElement);
      }
      if (this.section5) {
        observer.observe(this.section5.nativeElement);
      }
      if (this.section6) {
        observer.observe(this.section6.nativeElement);
      }
      if (this.section7) { 
        observer.observe(this.section7.nativeElement);
      }
      if (this.section8) { 
        observer.observe(this.section8.nativeElement);
      }
      if (this.section9) { 
        observer.observe(this.section9.nativeElement);
      }
    } else {
      console.warn('IntersectionObserver is not supported in this environment.');
    }
  }

  applyAnimation(element: HTMLElement) {
    if (!this.hasAnimationApplied.has(element)) {
      console.log('Applying animation to:', element);
      element.classList.add('animate__animated', 'animate__zoomIn'); 
      this.hasAnimationApplied.add(element);
    }
  }
  
  removeAnimation(element: HTMLElement) {
    console.log('Removing animation from:', element);
    element.classList.remove('animate__animated', 'animate__flash'); 
    this.hasAnimationApplied.delete(element);
  }
  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
