# MyList App
MyList is a universal post-it style list app that allows users to create lists and add list items to their respective lists.

## Tech Stack
<b>Built with</b>
- [Ruby on Rails](https://rubyonrails.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [React](https://reactjs.org/)
- [SASS](https://sass-lang.com/)

## Dev Description
Full-stack application built on a Ruby on Rails, PostgreSQL API Back-End with a React Front-End. Two models were used: Lists & List Items. There is a one-to-many relationship between lists and list_items. Lists have Create, Read and Destroy functionality. List items have full CRUD functionality and a priority column has been added to sort the list items on the list pages. SASS was used to loop through different colors for the post-it notes and to nest CSS. React Router was configured for the routing of the list and list item pages. CORS was configured so only this front-end can access the information from my API server.


### Link to Back-End
<b>Sites</b>
- [Heroku](https://mylist-app-api.herokuapp.com/)
- [Github](https://github.com/CMURPHY26/list_app_api)


### Deployed on:
<b>Heroku</b>
- [MyList](https://appmylist.herokuapp.com/)


### Installation
Clone and yarn install

### Future Updates
<b>Addition of</b>
- 3rd Model to go another level deep and add more detailed information for the list items
- Add update functionality to reorder items with + & - buttons or drag and drop
- Mobile view add a toggle to see a text version of the list




