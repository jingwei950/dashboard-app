import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'App-post-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent {

}
