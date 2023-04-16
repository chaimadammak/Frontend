import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './core/interceptor/loading.interceptor';
import { JobCategoryComponent } from './modules/front-office/components/job-category/job-category.component';
import { FormsModule } from '@angular/forms';
import { JobsCategoryComponent } from './modules/front-office/components/jobs-category/jobs-category.component';
import { UpdateJobCategoryComponent } from './modules/front-office/components/update-job-category/update-job-category.component';
import { JobOfferComponent } from './modules/front-office/components/job-offer/job-offer.component';


@NgModule({
  declarations: [AppComponent, SpinnerComponent, JobCategoryComponent, JobsCategoryComponent, UpdateJobCategoryComponent, JobOfferComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule,FormsModule,HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
