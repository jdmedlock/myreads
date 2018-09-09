# MyReads Project

[![restaurantreviews last commit](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/jdmedlock/myreads)
<br/>
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/jdmedlock/myreads/)

## Table of Contents

* [Overview](#overview)
* [Usage](#usage)
* [Dependencies](#dependencies)
* [Application Structure](#application-structure)
* [Change Log](#change-log)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

## Overview

The MyReads project was created as part of the Web Programming with
Javascript section of the [Udacity Front-End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The
purpose of this assignment is to demonstrate and solidify a basic
understanding of React from the course lessons.

You can find the project instructions here -->[Project Specification](https://jdmedlock.github.io/myreads/PROJECT_STARTER.md).

## Usage

### UI Features

The requirements for this project are defined by he [Udacity Rubric](https://review.udacity.com/#!/rubrics/918/view). However, the main requirements
for the main page are:

- The main page shows 3 shelves for books. Each book is shown on the correct
shelf, along with its title and author(s).
- The main page shows a control that allows users to move books between shelves.
The control should be tied to each book instance. The functionality of moving a
book to a
different shelf works correctly.
- When the browser is refreshed, the same information is displayed on the page.
- The main page contains a link to the search page. When the link is clicked, 
the search page is displayed and the URL in the browser’s address bar is /search.
- Bookshelf names are suffixed with a count of the number of books in contained
in that shelf.

This search page has these requirements:

- The search page has a search input field.
- The search page behaves correctly:
   - As the user types into the search field, books that match the query are
   displayed on the page, along with their titles and author(s). You can use
   throttle/debounce but are not required to do so.
   - Search results are not shown when all of the text is deleted out of the
   search input box.
   - Invalid queries are handled and prior search results are not shown.
   - The search works correctly when a book does not have a thumbnail or an
   author. (To test this, try searching for "poetry" and "biography").
   - The user is able to search for multiple words, such as “artificial
   intelligence”.
- Search results on the search page allow the user to select “currently
reading”, “want to read”, or “read” to place the book in a certain shelf.
- If a book is assigned to a shelf on the main page and that book appears on
the search page, the correct shelf should be selected on the search page. If
that book's shelf is changed on the search page, that change should be
reflected on the main page as well. The option "None" should be selected if a
book has not been assigned to a shelf.
- When an item is categorized on the search page and the user navigates to the
main page, it appears on that shelf in the main page.
- The search page contains a link to the main page. When the link is clicked,
the main page is displayed and the URL in the browser’s address bar is /.

### Starting the App

To start the application simply run `npm run start` or `yarn start` from the
command line to
start the application environment. The application will automatically open a
new tab in your browser with the url `localhost:3000`.

## Dependencies

This app has the following dependencies

| Module/Library | Environment | Description | Related Files |
|:---------------|:------------|:------------|:--------------|
| NPM            | Development | Package manager | package.json |
| Prop-Types     | Runtime     | Type checking for props | N/a |
| React          | Runtime     | UI Library  | N/a           |
| React-Router   | Runtime     | Declarative routing for React | N/a |
| React-Scripts  | Runtime     | scripts and configuration used by Create React App | N/a |

## Application Structure

The component structure of the MyReads application is shown in the following
diagram.

![MyReads Component Structure](https://github.com/jdmedlock/myreads/blob/development/docs/MyReads%20Component%20Structure.png)

## Change Log

For more information see [Change Log](https://github.com/jdmedlock/myreads/blob/development/CHANGELOG.md)

## Contributing

See [Contributing](https://github.com/jdmedlock/myreads/blob/development/CONTRIBUTING.md)
and our [Collaborator Guide](https://github.com/jdmedlock/myreads/blob/development/COLLABORATOR_GUIDE.md).

## Authors

Developers on this project can be found on the [Contributors](https://github.com/jdmedlock/myreads/graphs/contributors) page of this repo.

## License

[MIT](https://tldrlegal.com/license/mit-license)
