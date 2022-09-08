import { Component, OnInit } from '@angular/core';
import { MathQuestionDTO } from './helper/dto/mathQuestionDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calculator-front';

  model: any = {};

  ngOnInit(): void {

  }

  PostQuestion(){
    let mathQuestionDTO = new MathQuestionDTO();
    mathQuestionDTO.setQuestion(this.model.calculation);
    

  }
}
