import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three-directives',
  templateUrl: './assignment-three-directives.component.html',
  styleUrls: ['./assignment-three-directives.component.css']
})
export class AssignmentThreeDirectivesComponent implements OnInit {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
  ngOnInit(){

  }
}
