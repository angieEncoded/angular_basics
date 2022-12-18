import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})



export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  // This is a decorator that allows parent components to change the value of this item
  // we can set this by binding it to the app component's version - [postImage]='imgUrl'

  // This is an input alias, shouldn't use it often - Angular says its bad practice
  @Input('image') postImage = ""

  // Create an emitted event
  @Output() imageSelected = new EventEmitter<string>()

  // call when the component initialized
  constructor() {
    console.log("constructor called", this.postImage)
  }

  ngOnInit() {
    console.log("ngonInit called", this.postImage)
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngChangtes ran")    
  }

  ngDoCheck(): void {
    console.log("Do check ran")
  }



// runs when Projected content from the parent component
// runs after the content has been initialized
ngAfterContentInit(): void {
    console.log("after content init called")
}

// Runs when runs after the content has been checked for changes
ngAfterContentChecked(): void {
  console.log("after content checked called")
}

// runs when the component's template has been checked
ngAfterViewChecked(): void {
    console.log("after view checked called")
}

// runs when the component's template has been initialized
ngAfterViewInit(): void {
  console.log("afer view init called")
}


ngOnDestroy(): void {
  console.log("ng destroy function called")
}
}
