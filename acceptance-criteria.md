# Acceptance Criteria

<!--
Acceptance criteria tell you when a user story is DONE. Each one must be testable: pass or fail.
Write 2–3 criteria for every user story using this format:

Given [a situation], when [the user does something], then [this should happen].

Tips:
- Number them under their story: AC1.1 and AC1.2 belong to US1.
- Describe what the user SEES, not how the code works.
- Include at least one "what if it goes wrong" case per story (empty input, no results).
- Avoid vague words like "fast," "nice," or "easy." Could a classmate test it and agree it passed?

Example:
## US1: View today's menu
- AC1.1: Given I open the App page, when it loads, then I see each dish with its name, photo and price.
- AC1.2: Given no dishes are added yet, when I open the menu, then I see "No dishes today yet."

AC - Acceptance Criteria
-->

### Feature: Job Listing

US1: As a job seeker, I want to browse available local jobs in a card grid showing the title, location, pay amount, and category, so that I can easily see job listings.

- AC1.1: Given I am on the home page and jobs are saved, When the page loads, Then I see the jobs as cards in a grid, And each card shows the title, location, pay, and category.
- AC1.2: Given I am on the home page and the cards are showing, When I click a job card, Then a popup opens, And the popup shows the full description and location of that job.
- AC1.3: Given the popup is open, When I click the close button, Then the popup closes, And I see the card grid again.

### Feature: Job Posting

US2: As a homeowner, I want to fill out a form to post a new job with a title, category, description, location, and pay amount, so that job seekers can find my listing.

- AC2.1: Given I am on the Post a Job page, When I fill in the title, category, description, location, and pay, and click "Post Job", Then the job is saved, And it appears as a new card on the home page.
- AC2.2: Given I am on the Post a Job page, When I leave any field empty and click "Post Job", Then the job is not saved, And I see a message that says which field is missing.

### Feature: Five Star Rating

US3: As a homeowner, I want to view and give 1 to 5 star ratings on job seeker profiles, so that I can choose reliable workers.

- AC3.1: Given I am on a job seeker's profile page and they have ratings, When the page loads, Then I see their average rating as stars beside their icon, And I see the number (for example, 4.0).
- AC3.2: Given I am on a job seeker's profile page and they have no ratings, When the page loads, Then I see "No ratings yet" beside their icon.
- AC3.3: Given I am on a job seeker's profile page, When I click a star from 1 to 5, Then that rating is added to the job seeker's list of ratings, And the average on the profile updates right away.

### Feature: Category Filter

US4: As a job seeker, I want to filter the job listings by category using a dropdown, so that I can see only the kind of work I am looking for.

- AC4.1: Given I am on the home page and the job cards are showing, When I choose a category from the dropdown, Then only the cards with that category are shown, And the other cards are hidden.
- AC4.2: Given I have chosen a category, When I choose "All", Then all the job cards are shown again.
- AC4.3: Given I am on the home page, When I choose a category that has no jobs, Then I see a "No jobs found" message, And no cards are shown.
