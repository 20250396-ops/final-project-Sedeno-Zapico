# AI Log
<!--
This file is your record of how you worked with AI (Gemini, ChatGPT, or Claude).
Using AI is allowed. Hiding it is not. This log shows your instructor that YOU
reviewed, understood, and made decisions about your code.

WHEN to add an entry:
- Every time you use AI to plan, write, explain, or debug a part of your app.
- Add the entry right after that step works, BEFORE you commit. Don't write it all at the end.

HOW to write an entry:
- Copy the template below and fill it in. Newest entry at the bottom.
- Write in your own words. Short is fine, but be specific.
- "What I changed or rejected" is the most important part. Even small changes count:
  renaming a class, fixing a bug the AI made, simplifying code, or saying no to a suggestion.
- If you used the AI's code exactly as given, write why it was okay and what you checked.

TEMPLATE (copy from here):

## Entry [#]: [Date]
- **User story:** [US# and short title]
- **What I asked:** [Your prompt, or a short summary of it]
- **What the AI suggested:** [1–2 sentences summarizing the AI's answer]
- **What I changed or rejected, and why:** [Your decisions in your own words]
- **How I tested it:** [Which acceptance criteria you checked, and whether each passed]
- **What I learned:** [One new thing you now understand]

EXAMPLE:

## Entry 3: Nov 20, 2026
- **User story:** US1: View today's menu
- **What I asked:** "Show me how to display my menu array as cards on app.html."
- **What the AI suggested:** A forEach loop that builds the cards with innerHTML.
- **What I changed or rejected, and why:** Renamed `.item-card` to `.menu-card` to match
  my CSS. The AI forgot the empty menu case, so I asked for a hint and added a
  "No dishes today yet" message myself.
- **How I tested it:** AC1.1 passed (cards show name, photo, price). AC1.3 passed
  after my fix (empty message shows).
- **What I learned:** forEach runs the same code once for every item in an array.

Minimum of 5 meaningful AI logs.
-->

## Entry 1: November 19,2026
- **User story:** US1: List project pages
- **What I asked:** "Here is my project: what are the pages i need for this?"
- **What the AI suggested:** Suggested website pages: Home / Browse Jobs, Post a Job, Login / Sign Up, and Files.
- **What I changed or rejected, and why:** Regected log-in, Noted but will implement at a later date
- **How I tested it:** Subject for testing and mainly for inquiry.
- **What I learned:** Features will have an independent Html

## Entry 2: November 19.2026
**User story:** US1: Browse jobs in a card grid
- **What I asked:** I asked the AI to check my user story about browsing local jobs with title, location, pay, and employer contact details.
- **What the AI suggested:** Stated "dashboard" did not match my plan, employer contact details were not in my proposal and could be a privacy risk, and "near my home" and "clean" could not be tested. It asked me to write acceptance criteria.
- **What I changed or rejected, and why:** I removed "employer contact details" and "flexible work", and I replaced them with category.
- **How I tested it:** Not tested yet. This was planning only. I will test AC1.1 to AC1.3 after I build the card grid and popup.
- **What I learned:** Sensitive data must be considered when creating job listings, the user stories must not have untangible and immeasurable features/standards

### Entery 3: November 20, 2026
- **User story:** US1: Job listings 
- **What I asked:** "proceed with the next step of the web page"
- **What the AI suggested:** Provided files to set up for the features of the web app
- **What I changed or rejected, and why:** Regected adding index.html to a file with the other features.
- **How I tested it:** Not tested yet
- **What I learned:** Initial scafolding (index.html) boilerplate must be initialized and use unstylized text and test.

