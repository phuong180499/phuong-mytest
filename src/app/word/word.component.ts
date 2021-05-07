import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.scss']
})

export class WordComponent{
    // en : string = 'Hello';
    // vn : string ='Xin chào';
    // imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    // forgot=true;

    // toggleForgot(){     //funtion ẩn hiện forgot
    //     this.forgot =!this.forgot;
    // }
 //BAI13
    @Input() name:string | undefined; //kbao biến name
    @Output() onVote = new EventEmitter<boolean>(); //EventEmitter:đt xuất skien
    public voted:boolean = false;
    
    vote(agree:boolean){
        this.voted = true;        //đã vote
        this.onVote.emit(agree);  //xuất ra kq vote hay k vote
    }

    setName(name:string){
        this.name = name;
    }

}