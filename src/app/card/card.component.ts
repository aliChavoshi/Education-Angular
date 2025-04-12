import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface IProduct{

}
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  
})
export class CardComponent implements OnInit {
  @Output() isAvailable = new EventEmitter<IProduct>(); //child => parent

  private _title: string = '';

  @Input({ required: true }) // parent => child
  get title(): string {
    return this._title;
  }
  set title(parentValue: number) {
    //parent => child
    this._title = parentValue + ' - ریال';
  }

  @Input() product: any;

  constructor() {}

  ngOnInit() {}

  onClick(){
    this.isAvailable.emit({id : 1 , name : 'my title'});
  }
}
