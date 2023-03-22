# cs50_final_project -- An intellectual tests website by Vishruth Pesala(git-hub username: vishruth-pesala; edx username: vishruthpesala) and Advaith Elluru(git-hub username: advaith-elluru; edx username: Addu_E )

#### Video URL:
#### Description:

  This is our final project for CS50. This project is an application for the web. It is an educational website and tests 3 of the 4 core subjects in the US, math, science, and world studies.

  It is a python and HTML-based project using flask. We also used javascript and jquery to analyze the results, with SQL databases for a list of questions and user statistics. We have a fake subscription plan, which requires a valid credit card number. We don't expect anyone to use their credit card number, and highly advise against it since this is an informal project. We used PayPal's test numbers to check if our credit-checking function worked properly. We created a singular database with a wide variety of questions for our science and world studies questions. For the math questions, we used user input paired with random numbers to create a variety of math problems.

  With the math problems, we took user input of maximum and minimum numbers and their preferred type of operation to be tested on. We then used python to create a page in which randomly generated numbers from within the range we were given were shown with the operator. Users would have to answer questions and once they clicked submit, we ran their answers through a jquery function, that checked whether their math was correct or not. We then displayed a table of results next to the questions with their time taken in seconds, average time per question, percentage correct, and the correct number of answers, and then sent this data through AJAX to a python function which then stores this data in a table within our SQL database to recall when the user asks for past results.

  In the case of the World Studies test and the Science test, we created a table for each test in the math2.db database. In their respective tables, we added questions of different difficulty and sub-topics within the main topic. For the case of the World Studies test, there were 3 topics, Modern World History, US History, and Classical History. Each sub-topic had 2 difficulty levels. In the science test, we had 3 sub-topics as well, bio, chemistry, and physics. However, the science test does not have difficulty levels.

  Each test runs by taking user input and running it through a python function/path that will pull questions at random from the respective table in the database. After that, we send them as inputs to an HTML page, which then displays the questions within a table. Beside the question, a box for answering the question will appear. Once they answer the questions, we run their answers through a javascript or jquery function to check their answers. After checking their answers, we send their stats, such as time and percent correct, to python to upload into a SQL table through Json and Ajax. This way we save all of the results for reference again when they check the past results page.

  The past results page pulls certain results based on user results. They choose what results they want, and based on that input, we pick those rows from the results table from our SQL database. The user can choose "All Results", "Top Score", or "Best Time." For the "Top Score" and "Best Time" options, the user is supposed to input the number of results that they want. This is sent as a python request and then the pulled data from the database is sent to an HTML page, which is then displayed.

  The last page on our website is an extra links page, which leads to various sites on the web in which people could get extra practice for the subjects we have tests on.
  We will now go more into depth about each file that our project uses, now that you have a general idea of what our website does, and its basic functionality.

  app.py
    app.py is our main python file. It contains all of the code required for logins, registers, credit-card additions, and request processing. It is our bridge to our SQL database, where we save all user-data and questions that the user will be tested on. app.py allows the website to be run as a flask application, and not a static website. Within app.py we have many paths, each which serve a different function. Most of the paths in app.py will have atleast one line of code that deals with SQL requests.
    A few paths include:
    /login: this path deals with requests from the login page, and it checks wether the person trying to sign in already has an account, and wether he is using the right credentials to sign into an account. You only sign in when 

  This is our CS50 project.