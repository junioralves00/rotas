import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from './guards/auth.guard';
//import { CursosGuard } from './guards/cursos.guard';
//import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';



const appRoutes: Routes = [
  {path: 'cursos',
   loadChildren:()=>import('./cursos/cursos.module').then(m=>m.CursosModule),
   canActivate: [AuthGuard],
   canLoad: [AuthGuard]
  // canActivateChild: [CursosGuard]
  },
  {path: 'alunos', loadChildren:()=>import('./alunos/alunos.modules').then(m=>m.AlunosModule),
  canActivate: [AuthGuard],
  canLoad: [AuthGuard]

},
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'**', component:PaginaNaoEncontradaComponent}
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

//COnfigurações
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
