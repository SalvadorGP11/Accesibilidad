import {Component} from '@angular/core';

import {NgIf} from '@angular/common';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';

import {MatRadioModule} from '@angular/material/radio';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {
  mode = new FormControl('over' as MatDrawerMode);

    
}
