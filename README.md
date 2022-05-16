# Get Your Stuff Done!

This is a web-based tool intended to help you keep track of life's many tasks. My goal is that this application will help you **Get Your Stuff Done!**

## Installation

You can clone the repository:  
`git clone https://github.com/CurlyJoe71/get-your-stuff-done.git`

Then install the base dependencies:  
`yarn install`

Run the application:  
`yarn local`

## Usage & Features

Your current tasks, both complete and incomplete, will be displayed in their own lists. To mark an incomplete task as complete, simply click on the checkbox. If you need to move a completed task back to the "incomplete" list, simply uncheck the box.  
You can edit any task by clicking on the pencil icon. When you've finished making changes in the dialog box, simply click outside of it to update your task.  
If your lists are looking too cluttered, you can archive any task by clicking on the trash icon. Archived tasks will remain in the database, but will not be displayed. A future release will allow you to view all of your archived tasks.

## Future Releases & Features

Here are some exciting features that will be rolled out in the near future:

1. Notebook Category - you will be able to assign any task to a notebook, which will allow for even better organization!
2. Notebook Sorting - once you've got tasks assigned to notebooks, you can choose which tasks you'd like to view at any time.
3. View Archived Tasks - you will be able to see all of your archived tasks, just in case you need to take a moment to pat yourself on the back by remembering everything you've accomplished.
4. Authentication/User Login - you will be able to create your own login profile so your tasks can remain private, and not exposed in a publicly deployed repo.

Here are some additional technical issues that will be addressed in future releases:

1. Components will be extracted into a separate library.
2. Unit testing will be included in deployment process.
3. Expansion of database schema - additional tables will be needed to manage users and categories.
4. Cleaner express routing
5. Custom ORM

## History

This was a fun project I worked on as part of a technical interview process. This is much better than having to do an on-the-spot whiteboard exercise!

## Credits

It's just been me, Jaime Gonzalez, working on this application.
[curlyjoe71@gmail.com]

## License

MIT
