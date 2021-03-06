# Contributing Code

External contributors will be required to sign a Contributor's License Agreement. You can find this file [here](LifeLock_CLA.pdf). Please sign, scan, and send to [osscore@lifelock.com](mailto:osscore@lifelock.com). We look forward to collaborating with you!

1. Create a new issue before starting your project so that we can keep track of what you are trying to add/fix. That way, we can also offer suggestions or let you know if there is already an effort in progress.
2. Fork off this repository.
3. Create a topic branch for the issue that you are trying to add. When possible, you should branch off winter-16.
4. Edit the code in your fork.
5. Send us a well documented pull request when you are done.

The **GitHub pull requests** should meet the following criteria:

  - descriptive title
  - brief summary
  - @mention several relevant people to review the code
  - add helpful GitHub comments on lines that you have questions / concerns about

We'll review your code, suggest any needed changes, and merge it in. Thank you.

## Adding and modifying images?

Web performance matters a lot to us.

Whenever modifying images (SVG, PNG, JPG), please run this script that will optimize the project's images for the web:

```sh
$ npm run optimize
```
