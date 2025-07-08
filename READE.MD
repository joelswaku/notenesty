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



###
…or push an existing repository from the command line
git remote add origin https://github.com/joelswaku/notenesty.git
git branch -M main
git push -u origin main