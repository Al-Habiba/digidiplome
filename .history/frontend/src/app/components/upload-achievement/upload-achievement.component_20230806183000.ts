import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SmartContractService } from '../../services/achievement/achievement.service';


@Component({
  selector: 'app-upload-achievement',
  templateUrl: './upload-achievement.component.html',
  styleUrls: ['./upload-achievement.component.css']
})
export class UploadAchievementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
