import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishList';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
  constructor() {}

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
