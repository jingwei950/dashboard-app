import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';

@Component({
  selector: 'App-home',
  standalone: true,
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, EditorComponent],
})
export class HomeComponent {
  editorState = signal<boolean>(false);

  onClick(){
    this.editorState.set(!this.editorState())
  }
}
