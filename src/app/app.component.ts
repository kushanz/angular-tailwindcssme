import { Component, VERSION } from '@angular/core';
import { of, map, filter } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  list = [
    { name: 'kushan', age: 24, marks: 67 },
    { name: 'kamal', age: 27, marks: 39 },
    { name: 'nimal', age: 34, marks: 57 },
    { name: 'ann', age: 44, marks: 68 },
  ];
  users$ = of(this.list);
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));
  passedlist$ = this.users$.pipe(
    filter((users) => users.every((user) => user.marks > 50))
  );
  // passed = this.users$.pipe(map((users) => filter((user) => )))
  ngOnInit() {
    this.users$.subscribe((d) => {
      console.log(d);
    });
  }
}
