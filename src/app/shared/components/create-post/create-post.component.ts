import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'App-create-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-post.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePostComponent {

}
