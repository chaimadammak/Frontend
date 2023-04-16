import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';
import { JobCategoryComponent } from './components/job-category/job-category.component';
import { JobsCategoryComponent } from './components/jobs-category/jobs-category.component';
import { UpdateJobCategoryComponent } from './components/update-job-category/update-job-category.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';

const routes: Routes = [
  {
    path: '',

    component: FrontOfficeComponent
    
  },
  {
    path: 'AddJobCategory',

    component: JobCategoryComponent
    
  },
  {
    path: 'JobsCategory',

    component: JobsCategoryComponent
    
  },
  {
    path: 'UpdateJobCategory/:id',

    component: UpdateJobCategoryComponent
    
  },
  {
    path: 'AddJobOffer',

    component: JobOfferComponent
    
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontOfficeRoutingModule {}
