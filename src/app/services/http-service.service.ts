import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Giphy } from '../models/giphy';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
 
    gifys:Giphy[]=[];


  constructor(private http:HttpClient) { }

//   searchaGif(searchIt:string){
//       interface Results{
//           data:[];
//       }
//       let searchEndpoint ="https://api.giphy.com/v1/gifs/search?api_key="+environment.apiKey;

//       let promise = new Promise ((resolve, reject)=>{
//           this.http.get<Results>(searchEndpoint+"&q=" + searchIt).toPromise().then(

//             (results)=>{
//                 this.gifys=[];
//                 for(let i=0; i<results.data.length; i++){
//                     this.gifys.push(new Giphy(results.data[i]["images"]["fixed_height"]["url"]));
//                 }

//                 console.log(this.gifys);
//                 resolve();

//             },

//             (error)=>{
//                 console.log(error);
//                 reject();
//             }
//           )

    
//       })

//       return promise;
//   }

searchaGif(searchIt:string){
    interface Results{
      data:[];
    }
    let searchEndpoint = "https://api.giphy.com/v1/gifs/search?api_key="+environment.apiKey;

    let promise = new Promise((resolve, reject)=>{
      this.http.get<Results>(searchEndpoint+"&q="+searchIt).toPromise().then(
        (results)=>{
          this.gifys=[];
          for(let i=0; i<results.data.length;i++){
            this.gifys.push(new Giphy(results.data[i]["images"]["fixed_height"]["url"]));
          }
          console.log(this.gifys);
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        }
      )
    })
    return promise;
  }
}
