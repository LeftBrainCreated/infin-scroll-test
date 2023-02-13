import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DisplayBoxComponent } from './components/display-box/display-box.component';
import { InfinityScrollComponent } from './components/infinity-scroll/infinity-scroll.component';
import { TrackVisibilityDirective } from './directives/track-visibility.directive';

@NgModule({
  declarations:[
    AppComponent,
    DisplayBoxComponent,
    TrackVisibilityDirective,
    InfinityScrollComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
