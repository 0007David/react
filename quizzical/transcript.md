# List of content



## Transcript

We have come so far learning React.
I'm really proud of everything that you've been able to do, and you should be really proud of yourself too.
Because we've covered so much ground, this solo project is going to be like the ultimate React solo project.
It's going to take a ton of the topics that we've learned in React, put them together in one project, and it's probably going to challenge and stretch you too to reach outside of what we've learned and learn even more beyond what we've covered in this course.
Fortunately, it's a really fun solo project.
You are going to be building a trivia app called Quizicle.
When the user first visits your app, they'll be presented with this introduction screen that just has a start quiz button.
Clicking the start quiz button will then pull trivia questions from the trivia database, which we'll talk about in a second, and give users the chance to read the questions and answer.
When they're done selecting all their answers, they can click check answers at the bottom, and your app will score the answers.
It will display which ones were correct and which ones were incorrect and give them a chance to try the quiz again with new questions.
You can click on any of the screenshots here to take you to the Figma design for this project, and you can see clearly in Figma that there's three different screens you're going to be creating.
Now to be clear because we haven't covered React Router or any kind of routing library, you won't be actually creating three different routes for this project.
Instead, you'll need to keep track of some state that indicates if the initial screen should be displayed or if the quiz should be displayed.
When you get to the Figma design, you can feel free to click the drop down arrow and duplicate this design to your drafts.
That'll give you a chance to work within this file without necessarily seeing everybody else's cursors or selections.
And if you want, you can alter the design to better fit whatever your style is.
A quick way to get started would be to click the three dots in the lower right of the screencast and create a fork of the scrim which will give you this starting code here.
So let's talk for a minute about the requirements for this project.
As I mentioned, there's going to be the two different screens you have to conditionally render between.
The first one being the start screen and the second one being the list of questions and possible answers.
And to build this project, you are going to be accessing the [open trivia database API](https://opentdb.com/api_config.php).
You'll need to pull five questions from the OTDB.
You can click the link here or the next screen will also have a link to that API documentation.
After the user selects their answers, you want to make sure that you tally the number of correct answers when they click check answers.
And you'll definitely want to make sure that you style and really polish up this app so that it feels like a beautiful user experience.
This is what the open Trivia database API homepage looks like.
Again, you can click the screenshot you see here in order to check out the website.
And when you get there, there will be this option to choose the number of questions, the category, the level of difficulty, and so forth.
And you simply click generate API URL and copy that into your code base to make the fetch request to.
Now I wanted to take some time and talk about some hints for this project because there are some aspects of this project that are going to require you to step outside of your comfort zone and really stretch your capabilities.
And to be honest, that's a really good thing about this project.
A lot of students who have done this in the past have said that it really challenged them, but it was one of the best learning experiences they've had.
That said, I want to give some hints so that nobody is falling into a realm of despair and feeling like they're not capable of doing this.
Because trust me, as long as you've been doing all of the challenges up to this point in the course, you are capable of doing this project.
Now up here, I've taken a screenshot of an example response that comes back from the API.
This is what just one of the questions looks like from the API, and I wanted to point out a couple things.
First of all, if you look closely at the question, you can see some strange characters here with the ampersand r s q u o semicolon.
This is something called an HTML entity, and the API returns the string for the text encoded in those HTML entities.
Since those are pretty ugly and might be scattered throughout the questions of your app, you'll probably want to use a library like HE or HTML entities.
I've included links here for a quick reference.
In order to decode that text into something that's a bit more readable.
Again, if you go to either of these packages, they work basically the same so whichever one you want to use is fine.
Both of them have a decode method that you'll want to make sure you use in order to turn this text into more readable text.
The second thing you might notice is that there is an entire array dedicated to just the incorrect answers, and then a string under the key of correct answer.
This means that you'll want to create a new array that contains all of the answers, and you'll want to randomly insert the correct answer into the incorrect answers so that it's not always at the same position in the array of all answers.
So I would recommend either using Google or an AI tool like chat GPT to help you learn how to either shuffle the items of an array or simply how to insert a new item at a random index of another array.
And the last hint I want to give deals with how you can make it so that users can only select one answer.
Just like in a lot of things in life, there is more than one way to solve this issue.
And two common things that I have seen are either to make sure that you're tracking the selected answer index inside of each question object.
So up here you can see the question object that comes from the database.
You could maybe include a new key inside of here that says the selected index or the selected answer or however you want to deal with it, which would then allow you to conditionally style in in React which option was being selected.
Or another clever thing you could do is to simply use an HTML form for each one of your possible answers and use a radio input using the same name attribute so that it automatically only allows one selection.
If you do go that route you will probably be spending a bit more time on Google in order to figure out how to style a radio input so that it just looks like a button.
I think essentially you end up styling the label on that input and then hiding the radio input altogether.
And the last piece of advice I have is to make sure that you're sharing your work.
You can click the Discord icon here, which will take you to the I built this channel in Discord.
And you can click the Twitter icon here, which will pre populate a tweet so that you can brag to the world about the awesome project that you built.
And remember, the Scrimba Discord is not just a place to show off the work that you've completed, but it's also the perfect place in order to get any help that you need along the way if you're feeling stuck.
Okay.
This is the fun part.
It's time to jump in and start building this project.
Good luck.

