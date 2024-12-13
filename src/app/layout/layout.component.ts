import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import AOS from 'aos';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  
  isMenuOpen = false;
  isNavbarCollapsed: boolean = false; // Stato della navbar

  ngOnInit() {
    AOS.init();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleFAQ(){
    
  }
  
  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  closeNavbar(): void {
    this.isNavbarCollapsed = false; // Chiude la navbar
  }
}
