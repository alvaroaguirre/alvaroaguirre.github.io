---
layout: default
---

## Projects

### Chaotic Art

I have always been fascinated by the beauty and aesthetics found in mathematics. During my time at the LSE I discovered Chaos Theory, and realized that playing around with different dynamical systems and delay plots could generate beautiful pieces. Here are some examples, you can find more details [here](https://github.com/alvaroaguirre/NonLinearDynamics/tree/master/ChaoticArt).

The pieces shown below are (in order):  
_Unravelling_  
_Lorenz's Coccon_  
_Ikeda's eye_  

![Sloth](https://user-images.githubusercontent.com/29491896/84319417-e9c1e100-ab67-11ea-8e92-8b2d9449e86e.gif)

[<img src="https://user-images.githubusercontent.com/29491896/84307058-40252480-ab54-11ea-97b8-100acf966755.jpg">](https://user-images.githubusercontent.com/29491896/84307058-40252480-ab54-11ea-97b8-100acf966755.jpg)

[<img src="https://user-images.githubusercontent.com/29491896/84302654-8fb42200-ab4d-11ea-9464-9dc4f6266028.jpg">](https://user-images.githubusercontent.com/29491896/84302654-8fb42200-ab4d-11ea-9464-9dc4f6266028.jpg)


### Collatz's Contrapunctus

Reading "Gödel, Escher, Bach" by Douglas Hofstadter was a very enriching experience, and made me think a lot about the intersection of mathematics and music. One of my favorite bands, Vulfpeck, released a music video called ["Bach Vision Test"](https://www.youtube.com/watch?v=vJfiOuDdetg), which beautifully shows a fugue with four voices, each represented by a colored line on a black background that moves up and down depending on the notes. While reading the book, I regained interest in Collatz's Conjecture, which I had initially learnt about during a lunch with a mathematician friend a few years ago. I found the plot of stopping times amusing, and for small integers (<300), the plot semeed to have two "voices". So I thought it would be nice to follow Vulfpeck's idea and animate stopping times with two voices as if it were a counterpoint or fugue. I wonder if Lothar Collatz was a fan of Bach:

![Collatz](https://user-images.githubusercontent.com/29491896/84673706-f9ec0e80-af21-11ea-8dc4-59990ec7911b.gif)

I wrote some code in R that transform Collatz's stopping numbers into musical notes and plays a melody with them. You can find the code [here](https://github.com/alvaroaguirre/Projects/blob/master/collatz_music.R).

### Simple Whatsapp conversation analysis with Python

I find natural language data very interesting, especially after reading Ben Blatt's _Nabokov's favorite word is mauve_. I mostly do my data work in R, so I decided to try to use basic Python and Pandas to do some simply analysis on Whatsapp conversations. You can easily export chats from the Whatsapp app, so I wrote some code that gets and plots the daily messages sent, groups them by sender, checks the average message length, and finally gives you the most common words used by sender, excluding stopwords. The code has been made general, so you can check out the Jupyter notebook [here](https://github.com/alvaroaguirre/Projects/blob/master/whatsapp.ipynb) and try it with your own chat.

![Whatsapp](https://user-images.githubusercontent.com/29491896/85952801-928f7f00-b963-11ea-8372-b540c58293eb.png)


### Building Sierpiński triangles 

Fractals are incredibly soothing. After watching [this video](https://www.youtube.com/watch?v=kbKtFN71Lfs) from Numberphile, I decided to write a simple code that uses a chaotic game algorithm to draw Sierpiński triangles from randomly selected initial points. [Here](https://github.com/alvaroaguirre/NonLinearDynamics/blob/master/sierpinski.R) you can find the code and run it. Every time you will get a different fractal.

![Sierpinski](https://user-images.githubusercontent.com/29491896/84321310-d19f9100-ab6a-11ea-9214-3fc92feb87fa.gif)


### Project Euler

I enjoy logic puzzles and math challenges, so when I found out about [Project Euler](https://projecteuler.net), I was thrilled. 

In [this](https://github.com/alvaroaguirre/Project_Euler) github repository you will find my solutions for some problems, written in Python. I plan on keep adding solutions there. If you would like us to work on a problem together, I would love to. Please email me and we can arrange a meeting.

<img src="https://projecteuler.net/images/euler_portrait.png">


### Backtesting EWMA Value-at-Risk using a T-algorithm

Traditional VaR forecasting uses the assumption of normally distributed returns, which clearly underestimated the fat-tails of financial data. After a project that consisted on EWMA VaR forecasting for three major US stocks assuming normally, I expanded it by developing an algorithm that chooses stock-specific optimal degree of fat-tailness. Applying this algorithm to the top 100 US companies by market size, the results showed an improvement for every company:

<img src="https://user-images.githubusercontent.com/29491896/84324126-fd714580-ab6f-11ea-9cd9-7419071992a1.png">


### Contests with Uncertainty on Success Functions

Microeconomic models on Contest Theory in recent years have introduced asymmetries in costs, valuations, and information. However, most of them take for granted that the map from the vector of efforts to the probabilities of winning, known as the Contest Success Function, is part of the agents' common knowledge. For my bachelors' thesis I built a simple model adding a stochastic component in the CSF, plus information asymmetries between the participating agents, and proposed an application to electoral competitions. The paper was published in the Volume VII of the [Berkeley Economic Review](https://econreview.berkeley.edu)

[<img src="https://user-images.githubusercontent.com/29491896/84324905-7755fe80-ab71-11ea-9bc3-cc3b20c55316.png">](https://econreview.berkeley.edu)