
echo "Switching Branch Main........................................"
# git checkout main

echo "Adding to git........................................"
git add .

echo "Enter commiting Message........................................"
read Msg

echo "commiting with message\"$Msg\" ...................."
git commit -m "$Msg"

echo "git pushing to GitHub........................................"
git push

# echo "Building App........................................"
# npm run build

echo "Deploying Files to Server........................................"
# scp -r build/* root@146.190.65.198:/var/www/html/
scp -r build/* root@137.184.179.113:/var/www/iamredapple.com/newadmin

echo "Done!! ........................................"