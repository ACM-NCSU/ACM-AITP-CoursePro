# ACM-AITP CoursePro

The official software application of ACM/AITP Student Organization at NC State.

We have changed the infrastructure of our student software project. The prior direction was based upon java for its portability and relevance to NC State curriculum.

However, recent experience with Nodejs and other supporting packages have shown many benefits in respect to user and development experience. This also provides an opportunity for students to gain skills with technologies not fully covered in coursework.

This commit divides to the two code bases.
The following goals still apply.

MVP features:
- search bar for notes
  - search
    - by tag
    - by date
    - by text within note
  - create note if it isn't found
- calendar
  - schedule
  - tasking/todo
  - link notes to creation date, any date tag
- backup
  - backup database and config to a designated place
  - restore from backup

## About CoursePro

### An application built *by* students, *for* students!

Create and organize all of your course resources in one easily accessible place.
The application will allow users to link their Google Calendar(s), create notes on the fly using Markdown,
and ensure all of this is backed up into a single, easily portable format.

The application is managed by the Officers and Members of the ACM/AITP Student organization at NC State.
To contribute to its development, please *fork* the project, and create a pull request on the master branch/fork when
ready. You can review documented tasks and feature requests on the following Trello page: {put here}.

### About CoursePro Development

The application is a NodeJS Electron Desktop App. Electron is a Node based package which allows developers to create native desktop apps using web browser technologies. This will allow for portability between different Operating Systems, while providing the ease of create UIs based on html/JavaScript.

### Getting Started

TBD:
Link to some ACM documentation, our coding practices/expectations. Where to find good examples in existing program (golden task from Trello)

### Getting Started (with Electron)

Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**. (We use pug as a HTML/view engine as opposed to straight HTML files)

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd CoursePro
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - All of Electron's documentation.
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - Sample starter apps created by the community.
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - A very basic starter Electron app.
- [electron/simple-samples](https://github.com/electron/simple-samples) - Small applications with ideas for taking them further.
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - An Electron app that teaches you how to use Electron.
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - Small demo apps for the various Electron APIs.

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
