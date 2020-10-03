# Thingful Server

## Setting Up

- Install dependencies: `npm install`
- Create development and test databases: `createdb thingful`, `createdb thingful-test`
- Create database user: `createuser thingful`
- Grant privileges to new user in `psql`:
  - `GRANT ALL PRIVILEGES ON DATABASE thingful TO thingful`
  - `GRANT ALL PRIVILEGES ON DATABASE "thingful-test" TO thingful`
- Prepare environment file: `cp example.env .env`
- Replace values in `.env` with your custom values.
- Bootstrap development database: `npm run migrate`
- Bootstrap test database: `npm run migrate:test`

### Configuring Postgres

For tests involving time to run properly, your Postgres database must be configured to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
    - OS X, Homebrew: `/usr/local/var/postgres/postgresql.conf`
2. Uncomment the `timezone` line and set it to `UTC` as follows:

```
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```

## Sample Data

- To seed the database for development: `psql -U thingful -d thingful -a -f seeds/seed.thingful_tables.sql`
- To clear seed data: `psql -U thingful -d thingful -a -f seeds/trunc.thingful_tables.sql`

## Scripts

- Start application for development: `npm run dev`
- Run tests: `npm test`

## Follow Up Assignments

Assignment 1
- For this assignment you'll refactor the thingful-server and thingful-client projects. You'll change the server so that it supports protected endpoints for getting specific things and posting reviews of things.

Requirements
- Implement a basic authentication middleware to use for protecting endpoints.
- The GET /api/things endpoint should remain public.
- The GET /api/things/:thing_id endpoint should be protected by basic auth.
- The GET /api/things/:thing_id/reviews endpoint should be protected by basic auth.
- The POST /api/reviews endpoint should be protected by basic auth and automatically assign a user_id.
- The thingful-client should store the base64 encoded credentials when the login form is submitted.
- The base64 encoded credentials should be sent in requests to protected endpoints.
- If a user attempts to view the login form when they're already logged in, they should be redirected to the thing list page.
- If a user tries to view reviews for a thing, they should be redirected to the login form page.
