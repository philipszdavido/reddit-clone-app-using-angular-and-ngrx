import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { VotelinkComponent } from './components/votelink/votelink.component';
import { LinkComponent } from './components/link/link.component';
import { LinktextComponent } from './components/linktext/linktext.component';
import { PointsComponent } from './components/points/points.component';
import { AddlinkComponent } from './components/addlink/addlink.component';
import { LinklistComponent } from './components/linklist/linklist.component';
import { StoreModule } from '@ngrx/store'
import { reducers } from './redux/reducer/index';
import { SortPipe } from './redux/sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    VotelinkComponent,
    LinkComponent,
    LinktextComponent,
    PointsComponent,
    AddlinkComponent,
    LinklistComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
