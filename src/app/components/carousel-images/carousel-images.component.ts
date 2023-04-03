import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carousel-images',
  templateUrl: './carousel-images.component.html',
  styleUrls: ['./carousel-images.component.css'],
})
export class CarouselImagesComponent implements OnInit, OnDestroy {
  timerSubs!: Subscription;

  @Input() images: string[] = [
    '../../../assets/imgBackground_4.jpg',
    '../../../assets/imgBackground_1.jpg',
    '../../../assets/imgBackground_3.jpg',
    '../../../assets/imgBackground_2.jpg',
    '../../../assets/imgBackground_5.jpg',
  ];

  private _indexActiveImage: number = 0;
  get indexActiveImage() {
    return this._indexActiveImage;
  }

  set indexActiveImage(value: number) {
    this._indexActiveImage = value < this.images.length ? value : 0;
  }

  ngOnInit(): void {
    this.initTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  initTimer(): void {
    this.timerSubs = timer(50000).subscribe(() => {
      this.activateImage(this.indexActiveImage + 1);
    });
  }

  stopTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  activateImage(index: number): void {
    this.indexActiveImage = index;
    this.initTimer();
  }
}
