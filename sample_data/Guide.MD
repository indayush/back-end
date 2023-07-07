### Using Sample Data
<br>
To instert the sample data into the Database -

First We need to install **Postman** software to perform API calls as the code lacks a front-end.

Go to the homepage of Postman and perform following steps -

For Inserting data for ***/api/posts*** -
<br>

* Select Method = ***POST***
* Enter URL - http://localhost:5000/api/posts
* Go to Body tab and select raw radio button
  * Select the data type as JSON
  * Copy Paste the data in post.json file
* Hit ***Send*** button

For Inserting data for ***/api/doctors*** -
<br>

* Select Method = ***POST***
* Enter URL - http://localhost:5000/api/doctors
* Go to Body tab and select raw radio button
  * Select the data type as JSON
  * Copy Paste the data in post.json file
* Hit ***Send*** button

For Inserting data for ***/api/patients*** -
<br>

* Select Method = ***POST***
* Enter URL - http://localhost:5000/api/patients
* Go to Body tab and select raw radio button
  * Select the data type as JSON
  * Copy Paste the data in post.json file
* Hit ***Send*** button

The Port number should be 5000 or whatever mentioned in ***.env*** file.
