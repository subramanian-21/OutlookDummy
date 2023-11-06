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

## Maintaining State

- The application maintains the state of emails using a JavaScript data structure.
- Emails are marked as favorites, deleted, and visited, and their state is updated in real-time.
