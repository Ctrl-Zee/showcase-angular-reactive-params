# AngularReactiveParams

Small project to showcase how to use route parameters reactively. This project was heavily inspired by [Josh Morony](https://www.youtube.com/watch?v=TPA_iPWkUxc)

User data is mocked in the user service and subscribed to using the `async` pipe.

The magic happens in `detail.component.ts` where we get the route paramater while it is still inside of the observable. We use the switchMap operator to access the route parameter and make a call to the `getUser()` function.

## Running the app

Open the console and run `npm install`

## Development server

Run `ng serve -o` for a dev server.The app will automatically reload if you change any of the source files.
