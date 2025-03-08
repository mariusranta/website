# Personal Website Project

# Git Cheat Sheet

<pre>
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

git init	Initializes a new Git repository in the current directory.
git clone <repository_url>	Clones a repository from a URL

git add <file>
git add .
git commit -m "Your commit message"
git status
git log --oneline
git log --graph
git diff	Shows the changes between your working directory and the staged files. See what you’re about to commit.
git rm <file>	Removes a file from Git.
git mv <file> <new_file>	Renames or moves a file.

git remote	Lists all remote repositories.
git remote add <name> <url>	Adds a new remote repository.

git pull <remote_name> <branch_name>	Downloads changes and merges them into the current branch. A common workflow.
git push <remote_name> <branch_name>	Uploads changes to a remote repository.

git revert <commit_hash>	Creates a new commit that undoes the changes of a previous commit. A safer way to undo changes.
</pre>
