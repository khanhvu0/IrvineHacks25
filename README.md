## Inspiration
We love LeBron and the ideals he represents. We wanted to provide a tool to help those who are fans of LeBron, but also feel like they may need encouragement or affirmation. While we didn't set out to replace therapists, we do hope to contribute positively to the mental health of society (and, more specifically, LeBron fans) as a whole.

## What it does
Provides custom therapy from the King himself. Allows the user to chat with LeBron via text, voice, or video messages using our own multi-modal AI pipeline.

## How we built it
Frontend: The interface was built using React, Vite, JavaScript, and Tailwind CSS, allowing us to create a responsive, sleek, and intuitive user experience. Tailwind CSS streamlined our styling process, while Vite’s fast build system made development smoother and more efficient.

Backend: The backend was powered by Python and Flask, providing a lightweight and flexible framework to handle server-side logic. We used POSTMAN extensively to test and debug API calls and implemented webhooks for real-time data flow between the frontend and backend.

Integration: By pipelining APIs for text generation (OpenAI), text-to-speech (PlayHT), and video lip-syncing (sync.), we combined these components into a unified system. Our backend seamlessly coordinated these services, enabling the chatbot to deliver real-time, multi-modal interactions.

## Challenges we ran into
- Training the AI voice model required extensive data collection and processing, which we had to navigate through in order to create a convincing LeBron voice
- Creating an intuitive user interface proved to be a time-consuming task, and integrating features such as embeds into bot messages also ended up being more buggy than we anticipated.
- We experienced plenty of challenges connecting our own API endpoints to third-party APIs and creating a pipeline, especially once we had to refactor both our frontend and backend to handle webhooks.

## Accomplishments that we're proud of
- Seamless API Integration: we're happy with our API, which seamlessly stitches together calls from various APIs to create an efficient pipeline system.
- Mastering New Tools: all of us gained exposure to new tools and frameworks throughout the course of developing this project, which made it far more rewarding. 
- Collaborative Growth: navigating through problems as a team was challenging but ultimately one of the most valuable experiences we had during this hackathon. 
- Real-Time Interaction: we were happy that we efficiently chose workloads to take upon ourselves to effectively develop our app without any major conflicts or overlap in work, which made the development process relatively streamlined.
- Overcoming Challenges: we are happy that we overcame all potential bugs, API limitations, and other factors that could have potentially stopped us from bringing our true vision to fruition.

## What we learned

On the Frontend, Brandon and Aaditya spearheaded the development. Early in the process, we decided to use React, Vite, and Tailwind CSS for a simple implementation yet a clean look. This was our first project using these technologies, and it turned out to be an incredible learning experience.

For Brandon, who was new to web development, this project was a deep dive into modern frontend tools and best practices, providing hands-on exposure to building dynamic, responsive user interfaces. Aaditya, with some prior frontend experience, was able to expand his skill set, refining his understanding of component-based design and efficient styling with Tailwind CSS. By the end of the project, we not only delivered a polished interface but also grew significantly as developers, building confidence in using modern frameworks.

On the Backend, Khanh and Varun took the lead, tackling the intricate task of connecting multiple APIs to bring our AI LeBron chatbot to life. Their work centered around integrating OpenAI’s text generation API, text-to-speech functionality using a custom AI , and video lip-sync technology for a seamless, immersive user experience. They had to carefully prompt-engineer their queries to receive the most topical LeBron-style messages in the chat interface while also ensuring that our unique Text to TTS to Video pipeline preserved the voice, mannerisms, and character of LeBron.

Using Python as their primary language, they skillfully orchestrated these components, employing webhooks to handle real-time communication between the APIs. POSTMAN was instrumental in testing and refining the API calls, ensuring smooth data transfer and error handling. By pipelining these APIs together, they created a cohesive backend system that powered the chatbot's real-time, multi-modal interactions.

For both Khanh and Varun, this project presented unique challenges, from managing latency issues to handling complex API authentication and integration workflows. Their collaborative problem-solving and technical ingenuity allowed them to overcome these hurdles, delivering a robust and efficient backend. This experience significantly deepened their understanding of API pipelines, backend architecture, and the practical applications of modern AI technologies.

## What's next for LeTherapy
- We hope to deploy LeTherapy fully in the future, allowing for users from around the world to access this special tool
- We'd like to add authentication in order to create a secure chat experience while also allowing for individualized chat history, preferences, and more.
- We'd like to move more of our backend to the cloud in order to let it scale depending on user load-- currently it is deployed to a single server
- Get an endorsement from the GOAT himself :)

## Some links to try out
To make merges and commits easier, we split our project repositories into two sections: frontend and backend. You can find links to these repositories below:
- [Frontend](https://github.com/khanhvu0/IrvineHacks25)
- [Backend](https://github.com/varsunk/IrvineHacks25)
