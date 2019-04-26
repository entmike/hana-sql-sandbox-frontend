# hana-sql-sandbox-frontend
Simple Vue app that runs SQL Statements for a HANA backend exposed by https://github.com/entmike/hana-sql-sandbox-backend.

## Prerequisites
1) Node Installed
2) Vue CLI installed `npm i -g @vue/cli`
3) `hana-sql-sandbox-backend` running (https://github.com/entmike/hana-sql-sandbox-backend)

## Docker Installation
Easy-mode here:

https://hub.docker.com/r/entmike/hana-sql-sandbox 

## Installation 
```
git clone https://github.com/entmike/hana-sql-sandbox-frontend.git
cd hana-sql-sandbox-frontend
npm install
```
After the install is completed, please perform the setup below.

## Setup - Point to Backend System
Modify `.env.development` or set environment variable `VUE_APP_HANA_SQL_SANDBOX_BACKEND` to URL that `hana-sql-sandbox-backend` is running on.

*Example `.env.development` contents:*
```
VUE_APP_HANA_SQL_SANDBOX_BACKEND=http://localhost:9999/
```
*Example of setting environment variable (Windows):*
```
set VUE_APP_HANA_SQL_SANDBOX_BACKEND=http://localhost:9999/
```
## Example Usages
### Run (Development Mode, supporting hot-reloads)
```
npm run serve
```
### (Optional) Example of running and specifying a specific http port in development mode:
```
npm run serve -- --port 8912
```
*Note: Both sets of hyphens are intentional*
### Compile (Production) Compiles and minifies for production hosting
```
npm run build
```
*Note: Compiles frontend to static HTML/JS/CSS files to `dist` folder that is intended to be hosted by a web server of your chosing.*

## Example Screenshot:
![Initial SQL Statement, Illustrated](/src/help_images/frontend_screenshot.png "Initial Screen")
![Another SQL Statement, Illustrated](/src/help_images/frontend_screenshot2.png "Another Example SQL Command")