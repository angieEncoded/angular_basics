import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser'; // Angular can run as a desktop app or mobile app, we need this to develop for the browser
import { NgModule } from '@angular/core';
// Components imported here
import { PostComponent } from './post/post.component';

// This is a decorator that will affect the AppModule class
@NgModule({
  declarations: [
    AppComponent,
    PostComponent // component registered here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
