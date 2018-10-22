# ACM-AITP CoursePro

> The official software application of ACM/AITP Student Organization at NC State.

We have changed the infrastructure of our student software project. The prior direction was based upon Java for its portability and relevance to NC State curriculum.

However, recent experience with Node.js and other supporting packages have shown many benefits in respect to user and development experience. This also provides an opportunity for students to gain skills with technologies not fully covered in coursework.

This commit divides to the two code bases.
The following goals still apply.

## About CoursePro

> An application built *by* students, *for* students!

Create and organize all of your course resources in one easily accessible place.
The application will allow users to link their Google Calendar(s), create notes on the fly using Markdown, and ensure all of this is backed up into a single, easily portable format.

## Installation

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd CoursePro
# Install the dependencies
npm install
# Run the post-install
npm run postinstall
# Compile the SCSS into CSS
npm run postinstall
# Start the app
npm start
```

*Note:* If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Contribution

TBD:
Link to some ACM documentation, our coding practices/expectations. Where to find good examples in existing program (golden task from Trello)

To contribute to CoursePro's development, please *fork* the project, and create a pull request on the master branch/fork when
ready.

You can review documented tasks and feature requests on the following Trello page: {put here}.

## Understanding Electron

Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**. (We use pug as a HTML/view engine as opposed to straight HTML files)

### Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - All of Electron's documentation.
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - Sample starter apps created by the community.
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - A very basic starter Electron app.
- [electron/simple-samples](https://github.com/electron/simple-samples) - Small applications with ideas for taking them further.
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - An Electron app that teaches you how to use Electron.
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - Small demo apps for the various Electron APIs.

## Built With

- [Node.js](https://nodejs.org/) - A JavaScript runtime environment meant for desktop applications.
- [Electron](https://electronjs.org/) - An open-source software framework which allows the creation of desktop applications as if they were web apps, using JavaScript (through Node.js), HTML, and CSS.
- [Pug](https://pugjs.org/) - A whitespace-sensitive template engine built with JavaScript.
- [SASS](https://sass-lang.com/) - A CSS extension language, which allows for more intuitive nesting, more extensive variable use, simple loops, and more.
  - [Node-SASS](https://github.com/sass/node-sass) - A Node.js library which processes SASS/SCSS to CSS using [LibSass](https://github.com/sass/libsass)

### MVP features

- Search bar for notes
  - search
    - by tag
    - by date
    - by text within note
  - create note if it isn't found
- Calendar
  - schedule
  - tasking/todo
  - link notes to creation date, any date tag
- Backup
  - backup database and config to a designated place
  - restore from backup

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
