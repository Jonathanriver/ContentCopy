import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ButtonAlertModule } from 'il2022';
import { PerformanceModule } from 'per2022';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PerformanceModule,
    ComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
