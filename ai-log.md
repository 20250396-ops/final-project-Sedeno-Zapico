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

- **User story:** US1: Job listings*(1)*
- **What I asked:** "proceed with the next step of the web page"
- **What the AI suggested:** Provided files to set up for the features of the web app
- **What I changed or rejected, and why:** Regected adding index.html to a file with the other features.
- **How I tested it:** Not tested yet
- **What I learned:** Initial scafolding (index.html) boilerplate must be initialized and use unstylized text and test.

### Entery 4: November 20, 2026

- **User story:** Job listings*(2)*
- **What I asked:** "prooced to the next step"
- **What the AI suggested:** Gave a string of code that contains the section of articles acting as conatiner for job post
- **What I changed or rejected, and why:** none everything alligns with project
- **What I learned:** Headers are by level not by size, sections are containers to group objects, articles are tags for one complete item

### Entery 5: November 20, 2026

- **User story:** Job listings*(2.1)*
- **What I asked:** "prooced to the next step"
- **What the AI suggested:** Gave CSS decleration for Html
- **What I changed or rejected, and why:** None everything alligns with project
- **What I learned:** The difference between a padding,margin, and border together with grid template columns and fr

### Entery 6: November 20, 2026

- **User story:** Job listings*(3)*
- **What I asked:** "prooced to the next step"
- **What the AI suggested:** Gave Java decleration for data to be from java not manually inputed
- **What I changed or rejected, and why:** Did not comply in deleting Job post html section, still being used and will come out blank and render java code useless without class
- **What I learned:** Creating an array list

### Entery 7: November 23, 2026

- **User story:** Job listings*(3.1)*
- **What I asked:** "prooced to the next step"
- **What the AI suggested:** Gave the code that loop and puts every card on the page.
- **What I changed or rejected, and why:** None, Everthing alligns with the objective
- **What I learned:** Learned Query selector

### Entery 8: November 23, 2026

- **User story:** Job listings*(3.1)*
- **What I asked:** "OK"
- **What the AI suggested:** Delete the typed cards
- **What I changed or rejected, and why:** None, Everthing alligns with the objective
- **What I learned:** section class="job-grid" tags. Only remove the cards inside them. If you delete the section too, querySelector(".job-grid") returns null and the JavaScript fails with an error.

### Entery 9: November 23, 2026

- **User story:** Job listings*(3.1)*
- **What I asked:** "Next"
- **What the AI suggested:** provided a short plan for Step 3, part 2: the category filter and search bar.
- **What I changed or rejected, and why:** None, Everthing alligns with the objective
- **What I learned:** (label for="category-filter"): the text that names a control. The for value must match the control's id. This makes screen readers announce the control correctly, and it lets people tap the label to focus the control. It is an accessibility must-have

### Entery 10: November 23, 2026

## Nov 23, 2026

---

**User story:** US1: Browse jobs in a card grid (popup)

- **What I asked:** I asked the AI how to build a popup that shows the full job details when a card is clicked.
- **What the AI suggested:** Use a `<dialog>` element, fill it with one job's details using a function, and open it with `showModal()`. It also suggested making cards usable with Tab, Enter, and Space.
- **What I changed or rejected, and why:** I added description and location to each job in my array so the popup can show full details, and gave each card a data-id so the click knows which job to open. I rejected making one popup per job because it would be repetitive.
- **How I tested it:** AC1.2 passed (each card opens its own details). AC1.3 passed (the Close button closes it). Esc does not close it yet, and I am still checking why.
- **What I learned:** One reusable popup keeps the code short. I only change the data, not the HTML, and any fix (like Esc) is done once.

---

**User story:** US4: Category filter

- **What I asked:** I asked the AI how to filter the jobs by category using a dropdown.
- **What the AI suggested:** Use `jobs.filter(...)` to make a new list, and show it with the `showJobs` function.
- **What I changed or rejected, and why:** I made the dropdown options match the categories in my jobs array exactly (Cleaning, Babysitting, Gardening) and added an "All" option to show every job again.
- **How I tested it:** AC4.1, AC4.2, and AC4.3 passed.
- **What I learned:** `filter` makes a new array and does not change the original `jobs` array, so "All" can always show the full list again.

---

**User story:** US5: Keyword search

- **What I asked:** I asked the AI how to add a search bar that works together with the category filter.
- **What the AI suggested:** Put both checks in one `applyFilters` function, and use `.toLowerCase()` so capital letters don't matter.
- **What I changed or rejected, and why:** I used one `applyFilters` function for both the dropdown and the search bar, so they always work together. I rejected using two separate functions because one would override the other's results.
- **How I tested it:** AC5.1 to AC5.5 passed.
- **What I learned:** The `change` event fires only after the user picks an option (good for the dropdown), while `input` fires on every keystroke (good for live search).

---

**User story:** US1: Browse jobs in a card grid (popup)

- **What I asked:** I asked the AI how to build a popup that shows the full job details when a card is clicked.
- **What the AI suggested:** Use a `<dialog>` element, fill it with one job's details using a function, and open it with `showModal()`. It also suggested making cards usable with Tab, Enter, and Space.
- **What I changed or rejected, and why:** I added `description` and `location` to each job in my array so the popup can show full details, and gave each card a `data-id` so the click knows which job to open. I rejected making one popup per job because it would be repetitive.
- **How I tested it:** AC1.2 passed (each card opens its own details). AC1.3 passed (the Close button closes it). Esc does not close it yet, and I am still checking why.
- **What I learned:** One reusable popup keeps the code short. I only change the data, not the HTML, and any fix (like Esc) is done once.

---

**User story:** US4: Category filter

- **What I asked:** I asked the AI how to filter the jobs by category using a dropdown.
- **What the AI suggested:** Use `jobs.filter(...)` to make a new list, and show it with the `showJobs` function.
- **What I changed or rejected, and why:** ✏️ (hint: did you change any category names or options?)
- **How I tested it:** AC4.1, AC4.2, and AC4.3 passed.
- **What I learned:** ✏️ (hint: what `filter` does to the original `jobs` array)

---

**User story:** US5: Keyword search

- **What I asked:** I asked the AI how to add a search bar that works together with the category filter.
- **What the AI suggested:** Put both checks in one `applyFilters` function, and use `.toLowerCase()` so capital letters don't matter.
- **What I changed or rejected, and why:** ✏️ (hint: why one function for both controls?)
- **How I tested it:** AC5.1 to AC5.5 passed.
- **What I learned:** ✏️ (hint: the difference between the `change` and `input` events)
