# JsonViewer

Web application built using Django, React &amp; Postgres to login and upload &amp; display JSON

## Getting Started

### Setting Frontend

Navigate to frontend directory and run

1. Install dependencies `npm install`
2. Start frontend Server `npm start`. This will start frontend on the address [localhost:3000](http://localhost:3000)

### Setting Backend

Navigate to backend directory and run

1. Install dependencies `pip install -r requirements.txt`
2. Setting Postgres
   ![DB & USER CREATION](assets/db.png)

3. Django migrations `python manage.py makemigrations` and `python manage.py migrate`
4. Start backend Server `python manage.py runserver`

## Application Screenshots

Login Page.
![1](assets/sign_in_page.png)

SignUp Page. User can sign up using this page
![2](assets/sign_up_page.png)

Once the user login, the following page loads
![3](assets/page.png)

User clicks on `Upload Data` button, a popup comes up for uploading the file
![4](assets/upload.png)

Alert message: When file is uploaded
![5](assets/successfully_mess.png)

Alert message: When filetype is not Supported
![6](assets/file_type_not_supported_mess.png)

Alert message: When corrupt JSON is uploaded
![7](assets/bad_file.png)

Alert message: When Data is saved successfully to DB when user clicks on Sumbit button
![8](assets/data_save_mess.png)

User can view the data by clicking on `View Data` button. Users can also filter and sort table rows.
![9](assets/view_data.png)
