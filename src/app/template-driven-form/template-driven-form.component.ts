import { Component } from '@angular/core';
import {info} from "../Models/info";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
i:info={id:2, nom:"othmen",email:"mail",NumeroCarte:22,TypeCarte:"Type" ,DateExpiration:"2022/02/02",Code:22  }

  AddInfo(F: any) {
    console.log(F);
  }
}
