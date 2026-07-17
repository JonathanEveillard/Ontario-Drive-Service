# Ontario Drive Service 

[![Demo video](https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

A mock ServiceOntario style driver's licence dashboard, built primarily to
demonstrate automated testing practices using Jest unit tests, Playwright E2E
tests, and CI integration via GitHub Actions.

> **This is not an official government website or service.** All data,
> branding, and appointment information shown are fictional and used for
> demonstration purposes only.




## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** Vanilla HTML/CSS/JS (no framework)
- **Unit testing:** Jest
- **E2E testing:** Playwright
- **CI:** GitHub Actions

## Project Structure

- `demo/`
  - `app/` — Frontend pages (auth, dashboard, booking form) + `fr/` translations
  - `public/` — Static assets (logos, images)
  - `server/`
    - `app.js` — Express app entry point
    - `routes/` — `/auth`, `/users/:id`, `/appointments/:userId`
    - `data/`
      - `dataStore.js` — Data access layer (reads/queries mock JSON data)
      - `users.json`
      - `appointments.json`
  - `tests/`
    - `unit/` — Jest tests (data layer)
    - `e2e/` — Playwright tests (full user flows)

## Installation

**Prerequisites:** Node.js (v18+) and npm installed.

```bash
# Clone the repo
git clone https://github.com/JonathanEveillard/Ontario-Drive-Service.git
cd Ontario-Drive-Service

# Install dependencies
npm install

# Install Playwright's browser binaries (first time only)
npx playwright install
```

## Usage

Start the server:

```bash
node demo/server/app.js
```

Then open your browser to:

```
http://localhost:3000/auth.html
```

Log in with a name that exists in `demo/server/data/users.json` (e.g. one
of the seeded mock users) to reach the dashboard. Logging in with a name
that doesn't match any record will show an error and keep you on the
login page.

## Running Tests

```bash
npm run test:unit    # Jest unit tests (data layer)
npm run test:e2e     # Playwright E2E tests (full browser flows)
npm run test:all     # Both, chained (this is what CI runs)
```

Playwright's config automatically starts the Express server before running
E2E tests and shuts it down afterward, so you don't need to start the
server manually to run `test:e2e`.

## Continuous Integration

Every push runs the full test suite (`npm run test:all`) via GitHub
Actions — see `.github/workflows/test.yml`. This gates the pipeline on
both unit and end-to-end tests passing.

## Future Improvements

- Appointment booking flow (currently the dashboard is read-only; booking
  a new appointment via the form does not yet persist or appear on the
  dashboard)
- Reschedule / cancel actions on existing appointments
- French-language E2E test coverage