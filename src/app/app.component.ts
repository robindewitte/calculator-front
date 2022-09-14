import { Component, Input, OnInit } from '@angular/core';
import { MathQuestionDTO } from './helper/dto/mathQuestionDTO';
import { MathServiceService } from './services/math-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calculator-front';

  model: any = {};
  ErrorMessage = "";
  constructor(private mathservice: MathServiceService) { }

  ngOnInit(): void {

  }

  PostQuestion(){
    let mathQuestionDTO = new MathQuestionDTO();
    mathQuestionDTO.setQuestion(this.model.question);
    this.mathservice.PostQuestion(mathQuestionDTO).subscribe(
      data => {
        if(data == false){
          alert(data);
        }else{
          this.ErrorMessage = "geplaatst";
        }   
      },
      error => {
        this.ErrorMessage = "Something went wrong! Check your internet connection";
    });

  }
}
