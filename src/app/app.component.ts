import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
     // define the JSON of data
     public countries: { [key: string]: Object; }[] = [
        { Name: 'Australia', Code: 'AU' },
            { Name: 'Bermuda', Code: 'BM' },
            { Name: 'Canada', Code: 'CA' },
            { Name: 'Cameroon', Code: 'CM' },
            { Name: 'Denmark', Code: 'DK' },
            { Name: 'France', Code: 'FR' },
            { Name: 'Finland', Code: 'FI' },
            { Name: 'Germany', Code: 'DE' },
            
        ];
        // maps the local data column to fields property
        public localFields: Object = { text: 'Name', value: 'Code' };
        // set the placeholder to MultiSelect input element
        public localWaterMark: string = 'Select countries';
      
}
