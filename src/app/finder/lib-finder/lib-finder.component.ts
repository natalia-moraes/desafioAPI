import { FinderUserService } from './../../services/finder-user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-lib-finder',
  templateUrl: './lib-finder.component.html',
  styleUrls: ['./lib-finder.component.css']
})
export class LibFinderComponent implements OnInit {
  //instancia para pesquisa, FormControl é um pacote de formulario do angular
  query = new FormControl();

  readonly url = 'https://api.github.com/users';

  //criacao da variavel tipada para receber url
  res_url: any = [];
  name!:string;
  detalhes_user: any = [];


  constructor(private FinderUserService:FinderUserService) {

   }

  ngOnInit(): void {
  }

  buscar(){
    const repo = '/repos';
    let user = this.query.value;
    
    if(user && (user = user.trim()) !== ''){
      this.FinderUserService.getRepo(user).subscribe((response) => {
        this.res_url = response;
  
        //console.log(response);
  
      this.FinderUserService.getUser(user).subscribe((response) => {
        this.detalhes_user = response;
      })
      });
    }
    
  } 

  
}
