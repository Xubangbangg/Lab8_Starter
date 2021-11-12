# Lab 8 - Starter

Minjun Xu

1) In your own words: Where would you fit your automated tests in your Recipe project development pipeline?

Within a Github action that runs whenever code is pushed 

2) Would you use an end to end test to check if a function is returning the correct output? 
   No

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No,I believe it's hard to check between two users since they need intenert connections and interactions of them. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, since that's a small scale and doesn't interact with other. 