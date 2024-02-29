
# Amega Group exercise

A brief description of what this project does and who it's for

## Prerequisites

- [Watchman](https://facebook.github.io/watchman/)
- [Xcode](https://developer.apple.com/xcode/)
- [Xcode dev tools](downloaded-through-prefrences)
- [Cocoapods 1.14.3](https://cocoapods.org/)
- [Ruby 3.3.0](https://www.ruby-lang.org/en/)
- [JDK zulu17](https://reactnative.dev/docs/environment-setup?platform=android#:~:text=Java%20Development%20Kit)
- [Nodejs 20.11.0](https://nodejs.org/en)

#### tools like asdf or mise can automatically detect the project `.tool-version` file

## BUILDING (ios)

- run `yarn` at the root directory and wait for hte node modules to be installed
- run `yarn pods` at the root directory and wait for the cocoapods to be installed
- open `XCODE` and select the `.xcworkspace` file that is located inside the `ios` folder
- from `XCODE` top menu select project and then clean build project
- from `XCODE` top menu select project and then build. Now you are ready to move to the running phase

## RUNNING

###  Running using CLI (ios)

- run `yarn ios` at the root directory

###  Running using XCODE

- select the desired emulator from xcode and press the play button

## Folder structure

- `src`: This folder is the main container of all the code inside the application.
  - `components`: Folder that contains all the application components.
  - `modules`: this folder act as the main housing for computing functions and types for all the features.
  - `redux`: RTK and RtkQuery main directory.
  - `navigation`: Folder to store the navigators.
  - `screens`: Application UI screens.
  - `index.ts`: entry Layer 2.
- `App.js`: entry layer 1.
- `index.js`: Entry point of the application.

## Styleguide

For coding styling this repo follows ESLint standards and [Airbnb's styleguide](https://github.com/airbnb/javascript) with a few exceptions that you can find on the [.eslintrc](./.eslintrc)
