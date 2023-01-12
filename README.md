# Blog Client (User View)
[The Odin Project: Node] - Project: Blog Client User View

## Intro

-   This is the User View which is part of the Blog API Project. The overall project is to create an api and two clients: User View and Admin View that call the same api. The purpose is to teach us how to create apis that can serve many frontends. We had liberty of choosing how we want to do the frontend so I decided to use Gatsyb and Tailwind!
-   You can find more on the project here: [The Odin Project - Blog API](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/blog-api)

### 📗 Fonts used

-   [Lora](https://fonts.google.com/specimen/Lora?query=lora)
-   [Lato](https://fonts.google.com/specimen/Lato?query=lato)

### 🖋️ Design

-   I used this design for the colors [Made By Dwinawan](https://dribbble.com/shots/16378160--Exploration-Article-Page)
-   For the fonts I tried to do it similar to Medium, I did not get the exact fonts, but they were similar

### 🎨 Color Reference

|  Color            |  Hex                                                                  |
| ----------------- | --------------------------------------------------------------------- |
|  Blue             |  ![#020024](https://placehold.co/15x15/020024/020024.png) `#020024`   |
|  White            |  ![#fffefd](https://placehold.co/15x15/fffefd/fffefd.png) `#fffefd`   |
|  Black            |  ![#111113](https://placehold.co/15x15/111113/111113.png) `#111113`   |
|  Grey             |  ![#eae9ee](https://placehold.co/15x15/eae9ee/eae9ee.png) `#eae9ee`   |

## Overall

-   For this project, I wanted to practice getting know more of the features that Gatsby provides, using JS ES6 features & functions, writing reusable code, and using Tailwind (I heard a lot about this framework so I wanted to try it out). I learned a lot on this project. This is the first website I use Netlify to deploy!
-   For Gatsby and Client Side Development:
    -   I learned how to verify a JWT on the client side! I used the `jwt-decode` npm package for it. You can find how I used it in the utils.js file
    -   Learned the difference between creating Dynamic Pages with no data and creating page programmatically. The main difference is that dynamic page will create pages, but will have no data. So if you were to let users click on this dynamic pages and when they click you pass state that will appear, but if the user copies the url and go a new tab that state will disapper. So your page will get errors. This is why you need to create pages programmatically. The data is retrieved at build time this means that your data will always be there.
    -   I also learned about the difference between build time and client runtime data fetching. You use client runtime when the data changes a lot, in this project, there may a lot of user adding comments so we need to use client runtime there. This is typically done by using useEffect and making an api call there. Then there is data that does not change a lot. For example the post may not be changing a lot so I retrieve the posts data at build time. These two articles helped clear this up [Build Time and Client Runtime Data Fetching](https://www.gatsbyjs.com/docs/conceptual/data-fetching/) and [Getting Gatsby Wrong](https://betterprogramming.pub/getting-gatsby-wrong-836c198eb6ea)
    -   I reinforced what I knew about using react state variables. It really does matter when you call your SetState. When a SetState it will then rerender the component and it will effect every area where you are using this state variable, when done it will go back to where it was called to continue with the rest of the code
-   For ES6 and Reusable Code
    -   I created a utils.js file to wrap logic that I was going to use a lot
    -   I practice using functions likes slice(), includes(), and find() to help simplify code
    -   I used nullish coalescin and saw how beneficial it is! Clears the code by a lot
-   For Tailwind
    -   It is a great framework. The idea with Tailwind is that you do not need to create css files. You can use the css selectors they already have. All I used for this project was use tailwind to style and I want to customize I add it to the tailwind.config.js. I am going to use Tailwind on my next project again!

## Next Steps

-   I am going to work on Blog Admin view now and I plan to continue practicing all this new skills I learned. I am curious to see if I can combine styled components with tailwind as I needed the same styling in many components, for example a button. So I wonder if I can combine it like that. If not I can just create a regular component

## Technologies:

-   Gatsby
-   Tailwind
-   Netlify
-   JWT
