import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./pages/tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./pages/config/config.module').then(m => m.ConfigPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'launch-detail',
    loadChildren: () => import('./pages/launch-detail/launch-detail.module').then(m => m.LaunchDetailPageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
