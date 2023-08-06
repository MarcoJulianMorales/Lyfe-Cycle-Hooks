import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;
  constructor(){
    console.log('Root constructor')
  }

  ngOnInit(): void {
    console.log('Root onInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Root onChanges')
  }

  ngDoCheck(): void {
    console.log('Root DoCheck')
  }

  ngAfterContentInit(): void {
    console.log('Root AfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('Root AfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('Root AfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('Root AfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('Root OnDestroy')
  }

  increasePrice(){
    this.currentPrice++;
  }
}