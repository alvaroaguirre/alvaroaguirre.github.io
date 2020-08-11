---
layout: default
---

# Benford's Law and Corona

### Alvaro Aguirre - August 2020

Benford's Law is one of the most interesting anomalies consistenly found in real-life sets of numerical data. It was originally discovered in the late 19th century by Simon Newcomb, who observed that the first pages of logarithm books, which were used at the time to carry out some calculations, were far more worn than their later pages, where pages were ordered numerically. He then proposed the idea that in **any** list of real-life data, you are more likely to find numbers that begin with lower digits. To be precise, that the leading digits of the observations of the dataset would tend to this distribution:

| 1     | 2     | 3     | 4    | 5    | 6    | 7    | 8    | 9    |
|-------|-------|-------|------|------|------|------|------|------|
| 30.1% | 17.6% | 12.5% | 9.7% | 7.9% | 6.7% | 5.8% | 5.1% | 4.6% |

This sounded almost magical, and reminded me of when I first learnt about the Central Limit Theorem. Benford's Law (named after Frank Benford, who developed this idea further) is commonly used to detect fraud. Whether it is cooked financial books, bots in social media, or DeepFakes (fake human images built by AI), whenever a dataset is not "natural", the distribution of its leading digits doesn't fit Benford's Law. 

In my disbelief that this was actually a real thing, I decided to test it. First, I downloaded all the daily stock prices for all US-traded stocks during 2019 and... Benford's law perfectly fit. But a lot of people have already tested the fit of stock data on Benford's law, so I decided to try something more novel: Corona.

I wrote a [Python script](./benfords.py) that downloads a complete Coronavirus dataset from [Our World in Data](https://ourworldindata.org/coronavirus) and checks the frequency of leading digits. Since Benford's law is supposed to be robust to changes in units, I checked two variables, the daily number of new cases per country, and the total number of cases per million per country per day. The results are show in the bar plot below, with the expected frequency according to Benford's Law in blue.

![Benfords](benford_corona.svg)

It is amazing how the data from something so unexpected, so anomalous, like the Corona crisis, still follows some regularities.