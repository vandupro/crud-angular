import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterListComponent } from './monster/monster-list/monster-list.component';
import { MonsterUnitComponent } from './component/monster-unit/monster-unit.component';
import { LayoutComponent } from './layout/layout.component';
import { MonsterAddComponent } from './monster/monster-add/monster-add.component';
import { MonsterUpdateComponent } from './monster/monster-update/monster-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterListComponent,
    MonsterUnitComponent,
    LayoutComponent,
    MonsterAddComponent,
    MonsterUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
