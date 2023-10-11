import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-new-register-info-ec',
  templateUrl: './new-register-info-ec.component.html',
  styleUrls: ['./new-register-info-ec.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatIconModule],
})
export class NewRegisterInfoEcComponent {
  selected = '0';

}
