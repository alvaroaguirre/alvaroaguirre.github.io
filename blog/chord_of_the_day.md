---
layout: default
---

# Randomly generating a Chord of the Day with Python

### Alvaro Aguirre - November, 2020

Thanks to lockdown, I recently got back into playing the guitar after a 8-year-long hiatus. When I was younger I was a rock/metal guy trying to play complicated solos on my V-shaped guitar, but those days are long gone. My interests have drifted towards blues, funk and jazz, which require a more comprehensive music theory understanding that I lacked. So, I decided to go back to the basics and study. These genres use a wide variety of chords that as a rock player I had never seen, e.g. notable confusion when trying to play stuff like C#13b5b9. Best way to learn is constant exposure to new chords. I wanted to integrate that to my routine, every day get a new chord that I could explore, so, of course, I decided to write some code that would help me with that. In this blog post you will see the explanation of <a href = "https://github.com/alvaroaguirre/Projects/blob/master/ChordOfTheDay/chords.py" target = "_blank">this code</a>.

### Getting started - How are chords constructed?

My goal was to randomly generate a chord every day, that would be sent to my email. The first step is obviously to determine how is a chord constructed. Let's first go through some basics:

The *chromatic* scale is a sequence of 12 notes, each is one *semitone* higher than the previous one. For example, if we start with the note *A*, the next note is *A#* (*A* sharp), which is one semitone higher than *A*. Let's create a list with the chromatic scale:

````python
chromatic = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
````

You will notice that *B* and *E* do not have a sharp. These twelve are all the existing *individual notes*. 

A **chord** is a collection of at least three individual notes. One of them is the *root* note, and the others are notes that are at a specific *distance* from the root. That distance is what determines the type of chord. And what does distance mean in this setting? *Distance* would mean the number of semitones between two notes. For example, between *C* and *E*, we have a distance of 4 semitones, or 2 full tones.

Before creating our first chord, we need to talk about the *major scale*. This is the most widely used scale and it is extremely important. You might have heard of *Do Re Mi Fa Sol La Si*, or, in English notes: *C D E F G A B*. This is the *C* major scale. *C* because the first or *root* note is *C*, and *major scale* because of what notes follow, which are determined by the distance we discussed before. A major scale is constructed following the distances: 2-2-1-2-2-2-1. This means we start at the *root*, then move 2 semitones higher, and that's our second note for the major scale, then move 2 more semitones, and that's our third note, and so on.

For the C major scale, let's look at the chromatic scale and put in bold the notes that are part of the major scale, which follow the 2-2-1-2-2-2-1:

**C**, C#, **D**, D#, **E**, **F**, F#, **G**, G#, **A**, A#, **B**, **C**

Nice, what about the major scale of *D#*? We can easily build it using the 2-2-1-2-2-2-1:

**D#**, E, **F**, F#, **G**, **G#**, A, **A#**, B, **C**, C#, **D**, **D#**

We can also give a number to each element of the major scale. For example, the 3rd of the major scale of *C* is *E*, since it is the third element, starting from the root note. And **this** is what we will use to build chords, the elements of a note's major scale. Let me give you a simple example. A major chord is build using the 1, 3, 5, meaning the first (or root), third, and fifth element of the major scale. So if we wanted to build the major chord of C, we would need *C*, *E*, and *G*. If you play any instrument, you will realize that when you play a *C* chord, all the individual notes you are playing are one of those three. Different combinations create different chords, just to give you a few examples:

* Major chord: 1 - 3 - 5
* Minor chord: 1 - b3 - 5 (b means flat)
* add9: 1 - 3 - 5 - 9
* 9#11: 1 - 3 - 5 - b7 - 9 - #11 (# means sharp)

Okay, enough talking, let's get to the code

### Code 

Here we will put everything we have mentioned into code. Let's define some functions that will be helpful. 

First let's create `scale(root)`. This function will take a note as the argument, which will be the *root* note, and return the *major scale* for that note:

````python
def scale(root):

    """Returns the major scale of the root note"""
    # Get the position of the root note in the chromatic scale above
    root_pos = chromatic.index(root)
    # Reorder the chromatic scale so it starts with the root
    reorder = chromatic[root_pos:len(chromatic)] + chromatic[0:root_pos]
    # Specify the positions of the major scale
    scale_pos = [0,2,4,5,7,9,11]
    # Use list comprehension to extract the notes
    major = [reorder[i] for i in scale_pos]
    return(major)
````

Now, we need to have in mind that we might encounter some sharps *#* and flats *b*, so we need to have a couple of functions that take care of that. These will return the sharped or flatted note:

````python
def sharp(note):
    """Returns the note sharped"""
    # Get position in the chromatic scale
    position = chromatic.index(note)
    # If its the last element, return the first
    if position == len(chromatic)-1:
        return(chromatic[0])
    # If its not the last element, return the following one
    else:
        return(chromatic[position+1])
    
def flat(note):
    """Returns the note flatted"""
    # Get position in the chromatic scale
    position = chromatic.index(note)
    # If its the first element, return the last
    if position == 0:
        return(chromatic[-1])
    # If its not the first element, return the previous one
    else:
        return(chromatic[position-1])
````

Great. Now, before we continue, remember how I mentioned that a major chord is constructed using the first, third, and fifth note. Just like the major chord, there are many other variations. I have stored them all in a dictionary called `chords`. You can find it <a href = "chords/chord_dictionary.py" target = "_blank">here</a>. We have over 50 types of chords, and each one can be constructed using any of the 12 root notes. So we are talking about over 600 different chords! Each entry of the `chords` dictionary contains as key the name of the chord, and as value a list with the positions of the chord. For example:

````python
# Sample element of the chords dictionary
chords = {
    ...
    "7#5": [1, 3, "#5", "b7"],
    ...
}
````

You will note the flats and sharps are strings in order to include the *#* and *b* that will tell us which notes to find. Now we need to construct a function that takes as arguments the *root* note of the chord, and the list of *positions*, e.g. [1, 3, "#5", "b7"], and outputs the notes in the major scale of the *root* note on those positions.

````python
def get_notes(root, positions):
    """Given a list of positions, returns the notes"""
    # Let's initialize an empty list
    notes = []

    # Using the scale function, we will get the major scale of the root
    major = scale(root)

    # In the odd case positions is not a list, let's turn it into one
    if isinstance(positions,list) != True:
        positions = [positions]
    
    # Loop through each element of the positions
    for pos in positions:
        
        # If the position is a flat, we need to adjust the semitones
        if "b" in str(pos):
            pos = int(pos.replace("b",""))
            # Have in mind we can have positions larger than 7, but the scale cycles
            if (pos > 7):
                pos = pos % 7
            notes.append(flat(major[pos-1]))

        # In case the position is a sharp
        elif "#" in str(pos):
            pos = int(pos.replace("#",""))
            if (pos > 7):
                pos = pos % 7
            notes.append(sharp(major[pos-1]))
        
        # And finally, if the position is neither sharp nor flat
        else:
            if (pos > 7):
                pos = pos % 7
            notes.append(major[pos-1])
    return(notes)
````

We are all ready! Now we only have to select a random element from the `chord` dictionary, a random *root* note, and use our functions to find which individual notes compose that particular chord. For this, let's create a function that performs the randomization and outputs a n-tuple:

````python
import random

def get_random_chord():
    """Randomizes over chords and root notes"""

    # Get a random root note from the chromatic scale
    root = random.choice(chromatic)
    
    # Get a random chord from the dictionary
    chord = random.choice(list(chords.items()))

    # Create the name of the chord
    name = root + " " + chord[0]

    # Get the notes that form the chord
    notes = get_notes(root, chord[1])

    # Store all the information in the output
    random_chord = {}
    random_chord["root"] = root
    random_chord["major_scale"] = scale(root)
    random_chord["name"] = name
    random_chord["notes"] = notes
    random_chord["positions"] = chord[1]
    return(random_chord)
````

### Getting it in my email

Finally, I will use the *smtplib* and *ssl* packages to generate and send myself and email everytime the code is run with a message with information on the chord. You can see more details on how to do this on my post <a href = "webscrap.html" target = "_blank">Getting price changes in your email using BeautifulSoup</a>. Let's create the message:

````python

chord_of_day = get_random_chord()

message = """\
Subject: Chord of the day - """ + chord_of_day["name"] + """

Hi,

The chord of the day is """ + chord_of_day["name"] + """

The positions that construct this type of chord are: 
""" + str(chord_of_day["positions"]).strip('[]') + """

Its root note is """ + chord_of_day["root"] + """, which has the following major scale:
""" + str(chord_of_day["major_scale"]).strip('[]') + """

And the notes that compose """ + chord_of_day["name"] + """ are:
""" + str(chord_of_day["notes"]).strip('[]') + """

Go build it on the guitar! You can start on fret """ + str(in_string(chord_of_day["root"], "E")) + """ of the 6-th string, or fret """ + str(in_string(chord_of_day["root"], "A")) + """ of the 5-th string.

Enjoy,
Alvaro Aguirre
"""
````

You will notice I have also created a `in_string()` function that returns the fret of the *root* note on a given string:

````python
def in_string(note, string_note):
    """Finds fret on a string"""
    # First reorder the chromatic scale so it starts on the string_note
    note_pos = chromatic.index(string_note)
    reorder = chromatic[note_pos:len(chromatic)] + chromatic[0:note_pos]
    # Now get the position of the note
    return(reorder.index(note))
````

And that's it! Now I'll set this up on the crontab of my AWS EC2 and will get a new chord to explore everyday. Hope you liked this!