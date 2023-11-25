import { Component } from '@angular/core';
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'App-main',
  standalone: true,
  templateUrl: './main.component.html',
  imports: [HeaderComponent, HomeComponent, EditorComponent],
})
export class MainComponent {}
