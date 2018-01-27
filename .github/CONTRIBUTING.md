# Contributing to ACM-AITP-CoursePro

Thanks for taking the time to contribute! The following is a set of guidelines for contributing to ACM-AITP-CoursePro. These aren't strict rules, just use your best judgment, and feel free to propose changes to these guidelines in a pull request.

## Table Of Contents

[Code of Conduct](#code-of-conduct)

[Installation & Getting Started](#getting-started)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Java Styleguide](#java-styleguide)

[Additional Notes](#additional-notes)

## Code of Conduct

This project and everyone participating in it is governed by the [ACM-AITP-CoursePro Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [Matt Dzwonczyk](mailto:mgdzwonc@ncsu.edu).

## Installation & Getting Started

There are a few steps before one can begin developing on the CoursePro application:
1. Install [java-jdk](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
    - Download/update with latest version, but if it is already installed on your system, you should be good.
    You can check: 
    
      - Windows:      Control Panel -> Programs & Features (should be listed)
    
      - Linux/Mac:       `bash$  java -version`

    - Otherwise, install the latest version from the Oracle site. Follow the default installation procedure, ensure system environment variables are set.


2. Install IDE (Recommended: [Eclipse](http://www.eclipse.org/downloads/packages/eclipse-ide-java-developers/oxygen2))
    - Start Eclipse - remember the file location of your workspace, you can also create your own and use it.

3. Install Window Builder within Eclipse
    - Use the top menu: Help -> Install New Software…
    - In the top box, “Work with:” enter the link appropriate for your version of Eclipse. More links can be found here.
    - Install all packages.
  
  | Eclipse Version | Link                                                          |
|-----------------|---------------------------------------------------------------|
| 4.8 (Photon)    | http://download.eclipse.org/windowbuilder/WB/integration/4.8/ |
| 4.7 (Oxygen)    | http://download.eclipse.org/windowbuilder/WB/integration/4.7/ |
| 4.6 (Neon)      | http://download.eclipse.org/windowbuilder/WB/integration/4.6/ |
| 4.5 (Mars)      | http://download.eclipse.org/windowbuilder/WB/integration/4.5/ |

4.  Connect to GitHub
    - Ensure [Git](https://git-scm.com/) is installed on your system. Google can provide what’s need for your OS.
    - Login to your public GitHub account (if none, make one)
    - Navigate to the master github repository is under the ACM-NCSU organization. Link: [ACM-NCSU/ACM-AITP-CoursePro](https://github.com/ACM-NCSU/ACM-AITP-CoursePro)
    - Fork the repository (button in top right corner)
        - This creates a copy of ACM-AITP-CoursePro under your own user space.
    - Clone the your forked repository. (Green button, copy link)
    - Open Git Bash/Terminal. Navigate to your workspace directory.
        - Type `git clone <fork url>`
        - Change directory into the folder created from the clone. Go to the NCSU master repository and find the clone link, this is the master URL.
          - Type `git remote add upstream <master url>`
        - Type `git remote -v` to list your removes. Your listed remotes should be:
            - origin - your forked copy of the project, which you can pull & push to.
            - upstream - the master branch, can pull accepted updates. Can't push.
    - In Eclipse locate the ‘Git Repositories’ view. If not seen:
        - top menu -> Window -> Show View -> Other -> Git -> Git Repositories 
    - In the view click, “Add an existing local Git Repository"
        - Select the top level folder "ACM-AITP-CoursePro"
    - Right-click the new repository and click "Import Projects.."
        - You should then be able to navigate to the CoursePro prototype app under the main src tree.
    - Right-click and "Open with" -> Window Builder Editor.
        - There should be a "Design" tab near the bottom of the editor. Switch between this and source to test edits easily.
        - You can also build and execute the app by clicking the green play button on the top menu. Have fun!

## How Can I Contribute?

### Implementing Features

Unsure where to begin contributing to CoursePro? You can start by looking through these [good-first-issue](https://github.com/ACM-NCSU/ACM-AITP-CoursePro/labels/good%20first%20issue) and [help-wanted](https://github.com/ACM-NCSU/ACM-AITP-CoursePro/labels/help%20wanted) issues.

Take a look at the open issues and see if there are any that are open that you'd like to work on. If you find something you'd like, leave a comment asking to see if it has been claimed, and if not, one of the maintainers will assign you to it.

### Reporting Bugs

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an Issue on and follow [the issue template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started the program. When listing steps, **don't just say what you did, but explain how you did it**.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots** which show you following the described steps and clearly demonstrate the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for CoursePro, including completely new features and minor improvements to existing functionality. Following these guidelines helps everyone understand your suggestion.

#### How Do I Submit an Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.

### Pull Requests

* Fill in [the required template](PULL_REQUEST_TEMPLATE.md).
* Follow the [Java Styleguide](#java-styleguide).

## Java Styleguide

Java code should adhere to the following styleguide:
* Every method and class should include a Javadoc comment which briefly describes the method/classes' functionality and parameters, and if applicable, return value.
* Curly braces should *not* be placed on their own line.
* Operators should generally be separated by spaces (e.g. `variableA + variableB`), excluding the pre/post increment/decrement operators.
* Indentation levels should be four spaces, or a tab equal to four spaces.

#### Code Example:
```
package main.prototype;

import java.util.Example;

/**
 * An example class for styleguide.
 *
 * @author TheCoursePro
 */
public class CourseProExample extends Example {

    /** Static accumulator for valid names */
    private static int validNames = 0;
    
	  /**
	   * Checks if a user's name contains only letters.
     * @param name The user's name.
     * @return true if the user's name contains only letters.
	   */
	  public boolean isValidName(String name) {
        int multiplier = 1;
		    char[] chars = name.toCharArray();

        for (char ch : chars) {
            if (!Character.isLetter(ch)) {
                return false;
            }
        
            multiplier *= (int) ch;
        }
    
        validNames++;
        return true;
    }
}
```

## Additional Notes

If you have any questions, feel free to create an issue or reach out on Slack. Thanks for reading, and happy coding!
