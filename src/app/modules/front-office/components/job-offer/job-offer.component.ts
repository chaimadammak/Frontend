import { Component, OnInit } from '@angular/core';
import { JobCategory } from 'src/app/core/models/JobCategory';
import { JobCategoryServiceService } from 'src/app/core/services/JobCategoryService/job-category-service.service';
import { JobOfferServiceService } from 'src/app/core/services/JobOfferService/job-offer-service.service';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {
  title !: string;
  subject!:string;
  idJobCategory !: number;
  id !: number;
  jobCategories!: JobCategory[];
  categories!: JobCategory[];
  selectedCategoryId!: number ;
  selectedFile!: File;


  constructor(private JobOfferService: JobOfferServiceService, private serviceJobCategory : JobCategoryServiceService){}



    ngOnInit(): void {
      this.serviceJobCategory.getClaimsByUser().subscribe( {
        next : (data) =>   {
          console.log(data); 
          this.categories = data ;
        }
      }); 
  
    }
    
  
   
 
    AddJobOffer() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('subject', this.subject);
      formData.append('Id_Job_Category', this.selectedCategoryId.toString());
      formData.append('image', this.selectedFile);
      this.JobOfferService.addJobOffer(formData).subscribe(response => {
        console.log(response);
      });
    }
    

    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
    }
    
  


    
  }


  

  

