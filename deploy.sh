
echo 'Switching Branch Master....................'
git checkout main

echo 'Adding to git....................'
git add .

echo 'commiting with message ($1)'
git commit -m '$1'

echo 'git pushing to GitHub....................'
git push

echo 'Building App....................'
npm run build

echo 'Deploying Files to Server....................'
scp -r build/* root@146.190.65.198:/var/www/html/

echo 'Done!!'