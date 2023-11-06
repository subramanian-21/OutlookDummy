# Mail App

## Overview

The Mail App is a web-based application that simulates a basic email client. Users can view emails, mark them as favorites, and delete them. The application maintains the state of emails, their favorite status, deletion, and whether they have been visited or not.

## Features

- **Inbox:** Displays a list of emails in the inbox.
- **Favorites:** Allows users to mark emails as favorites, which are then displayed in the Favorites tab.
- **Deleted:** Deleted emails are moved to the Deleted tab.
- **Email Details:** Clicking on an email displays its details, including the sender, subject, and message.
- **Visited Emails:** Emails are marked as visited after being viewed.
- **Dynamic Styling:** Emails can be marked as favorites, deleted, and are styled to indicate their visited status.

## Usage

1. **Clone the Repository:** Clone this repository to your local machine.
2. **Open in Browser:** Open the `index.html` file in your web browser to launch the Mail App.

## Application Structure

- **HTML:** The user interface structure is defined in the `index.html` file.
- **CSS:** Styling is defined in the `style.css` file.
- **JavaScript:** The application logic is implemented in the `script.js` file.

## Getting Started

1. **Open the Mail App:** Launch the Mail App in your web browser.
2. **Inbox:** You will see a list of emails in the Inbox tab.
3. **Email Details:** Click on an email to view its details.
4. **Navigation:** Use the navigation tabs (Inbox, Favorites, Deleted) to filter emails.
5. **Favorites:** Mark emails as favorites by clicking the star icon.
6. **Deletion:** Delete emails by clicking the trash can icon.

## Maintaining State

- The application maintains the state of emails using a JavaScript data structure.
- Emails are marked as favorites, deleted, and visited, and their state is updated in real-time.
