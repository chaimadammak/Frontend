import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobCategory } from '../../../../core/models/JobCategory';
import { JobCategoryServiceService } from '../../../../core/services/JobCategoryService/job-category-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent implements OnInit  {
  ngOnInit(): void {
  
   
  }
  
  CategoryName! : string;

  constructor(private jobCategory: JobCategoryServiceService){
    
  }
  
  onSubmit() {
    const jobCategory = {
      name_Category: this.CategoryName,
      
    };
    this.jobCategory.addJob(jobCategory).subscribe(response => {
      console.log(response);
      

     });
  }

  
  




}
