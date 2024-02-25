# spotify-clone

This repository contains the code for a clone of the Spotify interface. It's part of my portfolio to showcase my skills in front-end development.

## Run Locally

1. Install `Live Server` extension on your VS Code to render the HTML and CSS files on a server.

1. Click on `Go Live` below and the browser will automatically open with the page content.

1. Install and then run `json-server` package to create a fake API based on a JSON data that will be consumed by the application when a search is made.
    ```sh
    $ sudo npm i json-server@0.17.4 -g
    ```
 
    ```sh
    $ json-server --watch ./api-artists/artists.json --port 3000
    ```

1. Try to write `Foo` on the search bar to see the app response.
