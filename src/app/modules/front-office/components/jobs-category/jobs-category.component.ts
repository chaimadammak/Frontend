import { Component } from '@angular/core';
import { JobCategory } from 'src/app/core/models/JobCategory';
import { JobCategoryServiceService } from 'src/app/core/services/JobCategoryService/job-category-service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-jobs-category',
  templateUrl: './jobs-category.component.html',
  styleUrls: ['./jobs-category.component.scss']
})
export class JobsCategoryComponent {
  jobs! : JobCategory[] ; 

  constructor(private serviceJobCategory : JobCategoryServiceService ,  private router: Router    ){

  }

  ngOnInit(): void {
 
    this.serviceJobCategory.getClaimsByUser().subscribe( {
      next : (data) =>   {
        console.log(data); 
        this.jobs = data ;
      }
    }); 

  }

  goToForm() {
    this.router.navigate(['AddJobCategory']);
 }

 

 deleteJob(id: number) {
   this.serviceJobCategory.deleteJobCategory(id).subscribe(response => {
     console.log(response);

    });
    this.router.navigateByUrl('/AddJobCategory', {skipLocationChange: true}).then(() => {
     window.location.reload();
   });


}


goToUpdateJob(JobCategoryId: number) {
  this.router.navigate(['/UpdateJobCategory', JobCategoryId]);
}

}
