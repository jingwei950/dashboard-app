import { Component, ElementRef, ViewChild } from '@angular/core';
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [EditorComponent],
})
export class MainComponent {}
