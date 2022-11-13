## Requirements
- Latest Node.js https://nodejs.org/en/
- Support: macOS 10.9 and above (64-bit only), Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only), Windows 10.

## Installation

```bash
# install yarn
yarn install

# install npm
npm install

# install Linux CentOS
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib

# install Linux Ubuntu/Debian
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

## Opening Cypress GUI

```bash
# By yarn
yarn run cypress open

# By npm
npm run cypress:open

# By npx
npx cypress run

# Long way with the full path
./node_modules/.bin/cypress open
```

## Running from the CLI

Same as running Cypress GUI but with `cypress run` command (and any CLI arguments)

```bash
# run Cypress tests headlessly
npm run cypress:run

# runs all example projects in specific browser
# similar to cypress run --browser <name>
npm run cypress:run -- --browser chrome

# sends test results, videos, screenshots
# to Cypress dashboard
npm run cypress:run -- --record
```