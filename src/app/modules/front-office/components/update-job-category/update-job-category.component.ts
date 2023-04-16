import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobCategory } from 'src/app/core/models/JobCategory';
import { JobCategoryServiceService } from 'src/app/core/services/JobCategoryService/job-category-service.service';

@Component({
  selector: 'app-update-job-category',
  templateUrl: './update-job-category.component.html',
  styleUrls: ['./update-job-category.component.scss']
})
export class UpdateJobCategoryComponent implements OnInit {
  id_Job_Category!: number;
  JobCategory ! : JobCategory;

  constructor(private route: ActivatedRoute, private jobService: JobCategoryServiceService, private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id_Job_Category = Number(params.get('id'));
      this.getJobCategory(this.id_Job_Category);
    });
  }
  getJobCategory(id: number): void {
    this.jobService.getClaimsByUser ()
      .subscribe(jobCategory =>  {
        jobCategory.map(c=> {if(c.id_Job_Category==id) {
          this.JobCategory=c ;

        }})
      });
  }

  updateJobCategory(): void {
    this.jobService.updateJobCategory( this.JobCategory.id_Job_Category,this.JobCategory)
      .subscribe(() => {
        console.log("updated");
      console.log(this.JobCategory);
        // Redirect to JobCategory list after update
        this.router.navigate(['/JobsCategory']);
        console.log(this.JobCategory);
      });
  }


}
