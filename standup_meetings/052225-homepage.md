# Homepage Team Meeting Notes

Date: 05/22/2025

## Attendees

* Wanting Li
* Xiaogeng Xu

## Goals
* More specific definition on size
* Finish core features:

  * Card storage in `localStorage` as JSON.
  * Search functionality (criteria TBD).
  * “View All Cards” UI with Canvas-rendered thumbnails.
  * File upload feature (define limitations).
  * Semantic conventions for HTML/CSS/JS templates and variable naming.

## Check-in

### Progress

* Redefine size to a more specific version:
  * XS: Less than 1 hour
  * S: 1–2 hours
  * M: 2–4 hours
  * L: 4–6 hours
  * XL: More than 6 hours
  * *Always round up*
* Card storage approach: JSON in `localStorage`.
* Initial planning for “View All Cards” page and thumbnail rendering using Canvas.

### Blockers

* Unresolved questions:
  * **UI Design**: What should the “View All Cards” page look like?

  * **Search**: What fields to support? (title, content, etc.)

  * **Upload**:
  * File formats allowed?
  * Maximum file size?
  * Max number of files?

  * **Canvas rendering**: Best approach for displaying card thumbnails.

  * **Semantics**:
  * What boilerplate templates to use for HTML/CSS/JS?
  * What variable naming conventions to adopt?

## Things to Do

* Communicate with the UI/UX team about any blockers

* Keep updating task table in [**Google Sheets**](https://docs.google.com/spreadsheets/d/1r9mgNuQNEs5BKenZrCYRvASA2GJZQ0jmovIXWe67_6A/edit?gid=0#gid=0).

* Continue defining **missing priorities and deadlines** for incomplete rows.


## Task Table
| **Task Name** | **Description** | **Priority** | **Size** | **Status** | **Deadline** |
| --- | --- | --- | --- | --- | --- |
| Basic Homepage structure | Set up the basic layout for the homepage | 3 | N/A | Done | N/A |
| Add sticked card on Home Page | Allow users to stick selected cards for easy access | N/A | 2-3 | To Do | N/A |
| Search function | Enable search by card title using a search bar | N/A | 1-2 | To Do | N/A |
| ‘View all card’ Page | Create a page to display all cards using basic HTML and CSS | N/A | 3-4 | To Do | N/A |
| Advanced functionality for View All Page | Improve animation and visual styling for the 'View All Card' page | N/A | 6+ (depends on design) | To Do | N/A |
| Setting Page | Allow user to edit theme, name, profile pic, email/contact info | N/A | 3-4 | To Do | N/A |
| Upload Button | Add upload function with file format/size limits (may require collaboration) | N/A | 5-6 | Pending | N/A |
| Semantics | Refactor code to use semantic HTML tags | N/A | N/A | N/A | N/A |
| Documentation | Maintain clear and updated documentation for devs and users | N/A | N/A | N/A | N/A |
