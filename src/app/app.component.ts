import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library-tool';
  theme = 'Light'

  onThemeChange(){
    const root = document.querySelector('html')
    if(root?.classList.contains('dark-theme')){
      root.classList.remove('dark-theme')
      this.theme = 'Light'
    }else{
      root?.classList.add('dark-theme')
      this.theme = 'Dark'
    }
  }
}


/*
add book
rent book
return book
delete book
search book
list all books


*/