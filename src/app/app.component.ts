import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Part } from 'src/part';
import { PartService } from './service/part/part.service';
import { share } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  displayedColumns: string[] = [
    'part_nr',
    'part_description_fr',
    'part_description_en',
    // 'symbol',
    // 'data5',
    // 'data6',
    // 'data7',
    // 'data8',
  ];

  constructor(private partService: PartService) {}
  parts: Observable<Part[]>;
  ngOnInit(): void {
    this.parts = this.partService.getParts().pipe(share());
  }
}
