import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { BrandsComponent } from './brands/brands.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {    
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },  
  {    
    path: 'home',    
    component: HomeComponent,    
    data: {    
      title: 'Home'    
    }    
  },   
  {    
    path: 'about',    
    component: AboutComponent,    
    data: {    
      title: 'About us'    
    }    
  },   
  {    
    path: 'services',    
    component: ServicesComponent,    
    data: {    
      title: 'Services'    
    }    
  },  
  {    
    path: 'testimonials',    
    component: TestimonialsComponent,    
    data: {    
      title: 'Testimonials'    
    }    
  },  
  {    
    path: 'portfolio',    
    component: PortfolioComponent,    
    data: {    
      title: 'Portfolio'    
    }    
  },  
  {    
    path: 'blog',    
    component: BlogComponent,    
    data: {    
      title: 'Blog'    
    }    
  },  
  {    
    path: 'contact',    
    component: ContactComponent,    
    data: {    
      title: 'Contact'    
    }    
  }, 
  {    
    path: 'pagenotfound',    
    component: PagenotfoundComponent, 
    data: {    
      title: '404 Page not found'    
    }    
  }, 
  { path: '**', redirectTo: '/pagenotfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
