# NodeServerDownloadFeature
A node server with express module to serve static or dynamically generated files.

* We can server static files and using get request `/resource/fileName` we can download it.
* If we are generating some file after the http request, then we just have to save our file inside `data` folder (as per this code).
After generating the file we can have get request to see the file content in web browser
(if it is txt, md, etc which can be open in browser ) or it is pop the window to save the file (it will be for excel , pdf file).
s

# Run

* `npm install`
* `node server.js`
* Go to `localhost:1729` 
