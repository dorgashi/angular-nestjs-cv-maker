import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ResumeToolComponent } from './resume-tool/resume-tool/resume-tool.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'resume', component: ResumeToolComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
