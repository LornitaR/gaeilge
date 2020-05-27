# gaeilge


## Setup Instructions
* Clone this repo

* Make sure you have NPM, Typescript, and Sass installed

### NPM
* open a terminal and type npm -v
    * if this returns a version, you're good to go
    * otherwise, get latest version here https://www.npmjs.com/get-npm

### Typescript
* open a terminal and type tsc -v
    * if this returns a version, you're good to go
    * otherwise, get the latest version https://www.npmjs.com/package/typescript

### Sass
* open a terminal and type sass --version
    * if this returns a version, you're good to go
    * otherwise, get latest version here https://sass-lang.com/install
    * note: if you have issues with an older version, you need to uninstall that version before intalling the latest one

## Getting Started
* open index.html in the browser, and it should display
* when you want to make some changes, run the following commands in the terminal to watch for changes made to your Typescript files and Sass files, so they can be compiled
    * tsc -w
    * sass --watch assets/styles/main.scss assets/styles/main.css
