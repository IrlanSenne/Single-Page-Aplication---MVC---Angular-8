import { NgModule } from '@angular/core';
import { SobreComponent } from './sobre.component';
import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [
    {path: '', component: SobreComponent}
]

@NgModule({
    declarations: [
        SobreComponent
    ],
    imports: [RouterModule, RouterModule.forChild(ROUTES)]
})
export class SobreModule {}