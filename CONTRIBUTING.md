## Contributing.

Hey there, thank you for taking interest in this project. I'd list the steps you can follow to get started in contributing.

- First, you have to fork the `dev` branch of this repository. When you do that, you're creating a copy of this repository under your own github account.

- Run the command below to get all the dependencies of the project.

```bash
npm install
```

- Clone the repository (your own forked version), by doing this...

```bash
    git clone https://github.com/kaf-lamed-beyt/next-status-modal.git
```

- Set the remote upstream of your forked repository to the base respository (i.e. the original repository)

```bash
    git remote add upstream https://github.com/kaf-lamed-beyt/next-status-modal.git
```

- Create a branch and start working your feature.

```bash
    git checkout -b [branch-name]
```

- Save and commit your changes

```bash
    git add --all

    git commit -m "your message"
```

When you save and commit your changes make sure you test the changes that you have suggested in the dev environment. In the `pages` folder you will find two files, `_app.js` and `index.js`. The index file is where you're expected to test the modal component before pushing it to your repo and submitting a PR (Pull Request).

- Push to your branch, create a pull request and wait for it to be merged.

```bash
    git push origin [branch name]
```

## Happy Hacking!
