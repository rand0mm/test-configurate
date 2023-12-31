#!/usr/bin/env sh

# # abort on errors
# set -e

# # build
# npm run generate

# navigate into the build output directory
cd .output/public

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/rand0mm/coffee-config.git master:gh-pages

cd -