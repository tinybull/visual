import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TestComponent} from './test.component';
import {ZjCarouselModule} from 'tinyvisual';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ZjCarouselModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [
    TestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
