import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
    selector: 'app-carousel-images',
    templateUrl: './carousel-images.component.html',
    styleUrls: ['./carousel-images.component.css'],
    standalone: false
})
export class CarouselImagesComponent implements OnInit, OnDestroy {
  timerSubs!: Subscription;

  @Input() images: string[] = [
    '../../../assets/imgBackground_4.jpg',
    '../../../assets/imgBackground_1.jpg',
    '../../../assets/imgBackground_2.jpg',
    '../../../assets/imgBackground_3.jpg',
    '../../../assets/imgBackground_5.jpg',
    '../../../assets/imgBackground_6.jpg',
    '../../../assets/imgBackground_7.jpg',
    '../../../assets/imgBackground_8.jpg',
    '../../../assets/imgBackground_9.jpg',
    '../../../assets/imgBackground_10.jpg'
  ];

  private _indexActiveImage: number = 0;
  get indexActiveImage() {
    return this._indexActiveImage;
  }

  set indexActiveImage(value: number) {
    this._indexActiveImage = value < this.images.length ? value : 0;
  }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }
  startAutoPlay(): void {
    this.timerSubs = interval(7000).subscribe(() => {
      this.indexActiveImage++;
    });
  }

  stopAutoPlay(): void {
    this.timerSubs?.unsubscribe();
  }

  activateImage(index: number): void {
    this.stopAutoPlay();
    this.indexActiveImage = index;
    this.startAutoPlay();
  }
}