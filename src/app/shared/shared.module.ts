import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MadiaPlayerComponent } from './components/madia-player/madia-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MadiaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SideBarComponent,
    MadiaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
