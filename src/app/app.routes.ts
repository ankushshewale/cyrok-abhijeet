import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		title: 'Home - Cyrok',
		loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
	},
	{
		path: 'about',
		title: 'About - Cyrok',
		loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
	},
	{
		path: 'services',
		title: 'Services - Cyrok',
		loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
	},
	{
		path: 'services/:slug',
		title: 'Service Details - Cyrok',
		loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
	},
	{
		path: 'solutions',
		title: 'Solutions - Cyrok',
		loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent)
	},
	{
		path: 'solutions/:slug',
		title: 'Solution Details - Cyrok',
		loadComponent: () => import('./pages/solution-detail/solution-detail.component').then(m => m.SolutionDetailComponent)
	},
	{
		path: 'products',
		title: 'Products - Cyrok',
		loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
	},
	{
		path: 'industries',
		title: 'Industries - Cyrok',
		loadComponent: () => import('./pages/industries/industries.component').then(m => m.IndustriesComponent)
	},
	{
		path: 'industries/:slug',
		title: 'Industry Details - Cyrok',
		loadComponent: () => import('./pages/industry-detail/industry-detail.component').then(m => m.IndustryDetailComponent)
	},
	{
		path: 'contact',
		title: 'Contact - Cyrok',
		loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
	},
	{ path: '**', redirectTo: '' }
];
