import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  timerSubs!: Subscription;

  @Input() images: string[] = [];

  private _indexActiveImage: number = 0;
  get indexActiveImage() {
    return this._indexActiveImage;
  }

  set indexActiveImage(value: number) {
    this._indexActiveImage = value < this.images.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  iniciarTimer(): void {
    this.timerSubs = timer(10000).subscribe(() => {
      this.activateImage(this.indexActiveImage + 1);
    });
  }

  stopTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  activateImage(index: number): void {
    this.indexActiveImage = index;
    this.iniciarTimer();
  }
}
