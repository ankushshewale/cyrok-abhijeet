import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		title: 'Cyrok - Home',
		loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
	},
	{
		path: 'about',
		title: 'Cyrok - About',
		loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
	},
	{
		path: 'services',
		title: 'Cyrok - Services',
		loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
	},
	{
		path: 'solutions',
		title: 'Cyrok - Solutions',
		loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent)
	},
	{
		path: 'products',
		title: 'Cyrok - Products',
		loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
	},
	{
		path: 'industries',
		title: 'Cyrok - Industries',
		loadComponent: () => import('./pages/industries/industries.component').then(m => m.IndustriesComponent)
	},
	{
		path: 'contact',
		title: 'Cyrok - Contact',
		loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
	},
	{ path: '**', redirectTo: '' }
];
