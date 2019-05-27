import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { BrandsComponent } from './brands/brands.component';
import { HomepageheaderComponent } from './homepageheader/homepageheader.component';
import { HomepagefooterComponent } from './homepagefooter/homepagefooter.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    PortfolioComponent,
    BlogComponent,
    BrandsComponent,
    HomepageheaderComponent,
    HomepagefooterComponent,
    PageheaderComponent,
    ContactComponent,
    PortfolioDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRLEaFQYiChspC8Ub995M7SGNGd8SxFU0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
