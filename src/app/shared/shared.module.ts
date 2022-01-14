import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MadiaPlayerComponent } from './components/madia-player/madia-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MadiaPlayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent,
    MadiaPlayerComponent,
    HeaderUserComponent
  ]
})
export class SharedModule { }
