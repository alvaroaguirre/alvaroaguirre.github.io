---
layout: default
---

# Creating a simple Twitter bot with Python

### Alvaro Aguirre - November, 2020

In this short post I will share how to create a simple Twitter bot using Python and the `tweepy` library. To give you an example, I will share how I created my *Chord of the Day* bot, which posts a tweet daily with a randomly generated guitar chord.

#### Getting started - Twitter for developers

You will not only need a Twitter account, but also register in [Twitter Developers](https://developer.twitter.com/en/apply-for-access). This will provide you with an API key that will be necessary to establish the connection using `tweepy`.

So head to the page linked above, and apply for a developer account. You will have to provide some information. For example, I selected the option *Making a bot* when asked what my primary reason for using Twitter developer tools was. Then, you will have to select your country, choose a name for your account, and then fill some information about how you intend to use the developer account.

Once you have a developer account, you will have to create a Project or App. On your Developer Dashboard, you can select to *Create an App*, and then provide some details like name and description. Then, you should proceed to create the **credentials**. Now that your app is created, you should go into its *Details*, select the *Keys and Tokens* tab, where you can **generate** a set of keys. For your bot, you will need:

* API Key
* API Secret
* Access token
* Secret token

And make sure that the last two are generated using the **Read and Write** permissions (by default it will only be **read**, which will limit what your bot can do)

Once you have generated them, store them somewhere safe!

#### Code

Now let's get coding, although the `tweepy` library does so much that we don't really have much to do. I will show you the very basics on how to post a simple tweet, but the library allows you to do anything you can think of (like, retweet, follow, etc).

First make sure you have `tweepy` installed:

````python
pip install tweepy
````

You will also have to include the keys that we mentioned above. 

````python
import tweepy

api_key = "INSERT_API_KEY_HERE"
api_secret = "INSERT_API_SECRET_HERE"
access_token = "INSERT_ACCESS_TOKEN_HERE"
secret_token = "INSERT_SECRET_TOKEN_HERE"

# Authenticate to Twitter using the OAuthHandler method with your API key and secret
auth = tweepy.OAuthHandler(api_key, api_secret)

# Set the tokens
auth.set_access_token(access_token, secret_token)

# Now use the API method to authenticate
api = tweepy.API(auth)

# We're ready! Now we can post a tweet using update_status()
api.update_status("Hello followers! I am tweeting from my terminal!")
````

Done! Your tweet will have been published! Now you can get creative and schedule the Python program to run at certain times and post whatever you want.