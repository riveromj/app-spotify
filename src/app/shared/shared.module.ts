import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MadiaPlayerComponent } from './components/madia-player/madia-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';



@NgModule({
  declarations: [
    SideBarComponent,
    MadiaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    OrderListPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SideBarComponent,
    MadiaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    OrderListPipe
  ]
})
export class SharedModule { }
