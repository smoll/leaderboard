# Leaderboard

Following along with [this tutorial](http://meteortips.com/first-meteor-tutorial/).

# Usage

Run application
```
$ meteor run
```

Run tests
```
$ starrynight run-framework nightwatch
```

## Gotchas

Was having issues installing `starrynight` globally on my Mac with NVM installed. Based on [this gist](https://gist.github.com/DanHerbert/9520689) I reinstalled node 0.10 (it fails to build on later versions) via brew without npm, installed npm separately and got it to work on the new install.

**TL;DR:**

```
rm -rf /usr/local/lib/node_modules
brew uninstall --force node
brew tap homebrew/versions
brew install node010 --without-npm
echo prefix=~/.node >> ~/.npmrc
curl -L https://www.npmjs.com/install.sh | sh
npm install starrynight -g
```

## Helpful links

0. [StarryNight](https://starrynight.meteor.com/) for generating all the test scaffolding/boilerplate

0. [Meteor.sh](https://changelog.com/deploy-meteor-apps-to-your-own-server-with-meteor-sh/) for deploying to Amazon EC2 (or wherever) instead of [my_app_name.meteor.com](https://www.meteor.com/try/6)
