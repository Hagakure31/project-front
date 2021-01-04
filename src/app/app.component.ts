import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { tableData } from 'src/tableData';
import { TableDataService } from './service/part/tableData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit(): void {}
}
