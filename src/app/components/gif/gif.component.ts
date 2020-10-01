import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/models/giphy';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
    gifs:Giphy[];

    



  constructor(public httpService: HttpServiceService) { }

  ngOnInit(){
      this.searchGif('car');
  }


  searchGif(searchIt){
    this.httpService.searchaGif(searchIt).then(
        (results)=>{
            this.gifs =this.httpService.gifys;
        },
        (error)=>{
            console.log('error')
        }
    )
}

}
