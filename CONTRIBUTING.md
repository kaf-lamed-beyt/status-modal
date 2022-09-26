## Contributing.

Before contributing to this project, you should have a basic overview of the file structure and how you can navigate through it when you decided to contribute.

The structure below shows the important files that you can make changes to. Please do not tamper with the config files. In the project structure, you'll notice that there's a `pages` folder. In it, you will find two files `_app.js` and `index.js`, you can import the `status-modal` component inside `index.js` to test the changes you make before pushing it.

```bash
.
├── pages/
│   ├── _app.js
│   └── index.js
├── src/
│   ├── style/
│   │   └── status.scss
│   └── index.js
└── README.md
```

The way you import the component will be different since the test environment is bootstrapped with Next.js. You can take a look at the example [here](README.md/#using-status-modal-with-nextjs).

Before you commit your changes and submit a pull request, make sure that you test the changes. You can do that by running the command below.

```bash
npm run dev
```

Below, you'd find the step-by-step process of contributing to this project, from **(Forking)** to submitting a final pull request. Please do not hesitate to ask questions whenever you feel stuck.

- First, you have to fork this repository. When you do that, you're creating a copy of this repository under your GitHub account.

- Clone the repository (your forked version), by doing this...

```bash
    git clone https://github.com/kaf-lamed-beyt/next-status-modal.git
```

When you're done with the step above, cd (change directory) into the project folder

```bash
cd status-modal
```

- When you're inside the directory of the project, run the command below to get all the dependencies of the project.

```bash
npm install
```

- Set the remote upstream of your forked repository to the base repository (i.e. the original repository)

```bash
    git remote add upstream https://github.com/kaf-lamed-beyt/next-status-modal.git
```

- Create a branch and start working on your feature.

```bash
    git checkout -b [branch-name]
```

- Save and commit your changes

```bash
    git add --all

    git commit -m "your message"
```

When you save and commit your changes make sure you test the changes that you have suggested. In the `pages` folder you will find two files, `_app.js` and `index.js`. The index file is where you're expected to test the modal component before pushing it to your repo and submitting a PR (Pull Request).

- Push to your branch, create a pull request and wait for it to be merged.

```bash
    git push origin [branch name]
```

## Happy Hacking! -->
