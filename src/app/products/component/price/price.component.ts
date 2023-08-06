import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{
@Input()
public price: number = 0;

public interval$?: Subscription;

  constructor(){

  }

  ngOnInit(): void {
    console.log('Child onInit');
    this.interval$ = interval(1000).subscribe
    (value => {
      console.log('tick: ',value)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child onChanges');
    console.log('Child ',{changes});
  }

  ngOnDestroy(): void {
    console.log('Child OnDestroy');
    this.interval$?.unsubscribe();
  }
}