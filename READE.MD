…or create a new repository on the command line
echo "# notenesty" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/joelswaku/notenesty.git
git push -u origin main

2️⃣ Change your global name/email if needed
You can always update them:

bash
Copy
Edit
git config --global user.name "Your New Name"
git config --global user.email yournewemail@example.com

#4️⃣ See where Git stores your global settings
If you want to see your .gitconfig file itself:

✅ On Git Bash:

bash
Copy
Edit
cat ~/.gitconfig
Example output:

Copy
Edit
[user]
    name = Joelswaku
    email = joelswaku@gmail.com


##
###### 
##
to see if already comit 
PS C:\Users\Joel Makila\Desktop\notes.react> git log
####
#####
##
4. To see the commit message of the last commit only:
bash
Copy
Edit
#####
git log -1 --pretty=%B
######
git status
git add .
git commit -m "Your message"
git push
##### to delete lock file
PS C:\Users\Joel Makila\Desktop\notes.react> del .git\index.lock
#####

#
git add READE.MD
git commit -m "Update READE.MD"
#

###
…or push an existing repository from the command line
git remote add origin https://github.com/joelswaku/notenesty.git
git branch -M main
git push -u origin main


Visual Studio	Git Equivalent
Publish Branch	git push -u origin main
Commit	git commit -m "message"
Sync Changes	git pull + git push
Clone Repo	git clone <url>



✅ What YOU should do now
Since your notes.react project already exists and has commits, just do:

bash
Copy
Edit
git remote add origin https://github.com/joelswaku/notenesty.git
git branch -M main
git push -u origin main
That will connect your local project to GitHub and upload your commits.