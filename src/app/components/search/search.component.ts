import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchIt: string;

    @Output() emitSearch = new EventEmitter<any>()

    search(){
        this.emitSearch.emit(this.searchIt);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
