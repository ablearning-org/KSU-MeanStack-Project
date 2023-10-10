import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;
  results: string[] = [];
  

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
  ) {}
   

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  performSearch(): void {
    const query = this.searchForm.get('query')?.value;
    
    this.searchService.performSearch(query).subscribe(
      data => {
        this.results = data;
      },
      error => {
        console.error('Error fetching search results', error);
      }
    );
  }
}

