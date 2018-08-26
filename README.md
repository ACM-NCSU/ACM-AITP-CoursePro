# ACM-AITP CoursePro

The offical software application of ACM/AITP Student Organization at NC State.

We are changing the infrastructure of our student software project. The prior direction was based upon java for its portability and relevance to NC State curriculum.

However, recent experience with Nodejs and other supporting packages have shown many benefits in respect to user and development experience.  This also provides an opportunity for students to gain skills with technologies not fully covered in coursework.

This commit divides to the two code bases.
The following goals still apply.

MVP features:
* search bar for notes
  - search
    + by tag
    + by date
    + by text within note
  - create note if it isn't found
* calendar
  - schedule
  - tasking/todo
  - link notes to creation date, any date tag
* backup
  - backup database and config to a designated place
  - restore from backup
