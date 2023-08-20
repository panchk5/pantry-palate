# pantry-palate

This project was created at Hack the 6ix 2023

Watch the pitch video here: https://youtu.be/qFn3nqLKwyQ

![mockup](https://github.com/Jingyue-Wu/pantry-palate/assets/75918217/4025c10a-035d-408c-8e2f-9166ab9fb685)

## About 
We all waste food. Whether it’s neglect, over purchasing or lack of proper cooking knowledge, it’s inevitable. According to the United Nations, we waste a whopping 17% (1.3 billion tons) of food every year. That is an extraordinary amount of waste that burns money, increases carbon emissions and most importantly, destroys our planet. How about we fix that? What if there was an all-encompassing mobile application that fully-incorporates all the food left in your fridge using a custom-built image-classification AI for ease-of-use, a Voiceflow chatbot utilizing fluid dialog and a filtering system

## Inspiration
The inspiration behind Pantry Palate was driven by a distinct need in today's digital age. With an abundance of food apps flooding the market, many equipped with fridge scanning capabilities, we recognized a gap that needed addressing. While such apps exist, they often fall short in catering to the specific needs of individuals with allergies and dietary restrictions. This realization spurred us to develop an inclusive solution that caters to everyone's unique dietary requirements. Our goal is to provide a comprehensive app that not only simplifies food management through fridge scanning but also incorporates essential elements to ensure individuals can seamlessly navigate their dietary restrictions and preferences. By combining technology with a commitment to inclusivity, our food scanning fridge aims to empower users to make informed and health-conscious choices, revolutionizing the way we interact with our refrigerated contents

## What it does
Pantry Palate is your 3-in-1 personal cook assistant helping you eliminate food waste, via fridge scan, AI chatbot, and comprehensive filters accommodating allergies and dietary restrictions.

## How we built it
Our Team was able to develop this Progressive Web Application using ReactJS in the frontend. The decision to utilise react was to open the doors of component reusability, while using Tailwind to develop interactive and dynamic components throughout the application. To incorporate functionality within the application, the team opted to use Flask. Not only for its efficiency in backend applications, but also chosen based on the team's experience with python. Once both applications were linked, our team shifted the attention to identifying the elements within the image environment. Using the Ultralytics library, our team was able to develop an Artificial Intelligence model and train it using Google Colab and Roboflow database. Finally, to accurately gather the recipes based on the given ingredients, our team decided to use Spoonacular API for its large dataset with accurate recipes. 

## Challenges we ran into
There were numerous challenges our team had to overcome to deliver this application.  
- For starters, this was the first time anyone in our team wanted to develop an application related to Artificial Intelligence. As such, there was initially a steep learning curve as the team needed to overcome to leverage its full capabilities. 
- Another challenge that was faced was initially establishing a link between the frontend and backend. As the team wanted to incorporate flask for its lightweight. However, this is not very standard as ReactJS applications typically use nodeJS and expressJS to perform backend programming and server applications respectively. As such, our team also had to discover how to combine our familiarities with Python and channel it into a ReactJS application. 
- However, none of these challenges would compare to what was faced towards the end development of the process. When the team was ready to incorporate the chatbot, an unforeseen merge conflict occurred. Setting our team backwards in progress as they scrambled for 4 hours trying to reassemble their frameworks. 

## Accomplishments that we're proud of
We’re quite proud of the accuracy that our program has in detecting the ingredients available and believe it is the key reason why this program will be so effective. Additionally we feel very pleased about the frontend design and how the user experience turned out. 

## What we learned
Our team was able to develop a firm understanding of web development principles coupled with backend practices that should be used to develop a Progressive web application. Additionally, our team was also able to learn how to connect frontend applications designs with backend applications using the Flask library. Finally, we learned how to use Artificial Intelligence libraries in python such as Ultralytics to effectively identify all elements within the environment provided. 
