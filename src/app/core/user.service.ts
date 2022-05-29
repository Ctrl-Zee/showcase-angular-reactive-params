import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: string;
  name: string;
  location: string;
  bio: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'Andrew Smith',
      location: 'Indianapolis',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: '2',
      name: 'Josh Primm',
      location: 'Carmel',
      bio: 'Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat interdum varius sit amet mattis. Mollis nunc sed id semper risus. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Neque sodales ut etiam sit amet nisl.',
    },
    {
      id: '3',
      name: 'Josh Taylor',
      location: 'Martinsville',
      bio: 'Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Faucibus interdum posuere lorem ipsum. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nec ullamcorper sit amet risus nullam eget felis eget.',
    },
    {
      id: '4',
      name: 'Mark Davidson',
      location: 'Greenwood',
      bio: 'Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Faucibus interdum posuere lorem ipsum. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Aliquet nec ullamcorper sit amet risus nullam eget felis eget.',
    },
  ];

  constructor() {}

  // Simulate loading from API
  getUsers() {
    return of(this.users).pipe(delay(500));
  }

  getUser(id: string) {
    return of(this.users.find((user) => user.id === id)).pipe(delay(500));
  }
}
