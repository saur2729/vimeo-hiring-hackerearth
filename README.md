# vimeo-fullstack-dev-hiring-challenge

Vimeo hosted a hiring challenge on hackerearth on 21 March'20. A problem statement was provided as mentioned below for the hiring challenge and the tech-stack we could use were HTML, CSS with ReactJS/AngularJS

### Hiring challenge details!
** I'm sharing the details here because it was an open contest for all.

[Problem Statement]
Develop a frontend application which would display account and transaction details fo a user.

[Minimum Requirement] (Level 1)
  - Use of web API to fetch account details
  - visually interactive design to list details
  - Implement pagination on the frontend. Display 10 records max in a page.
  - Zip all your SOurce code, Screenshots & detailed deployment instructions and upload

[Intermediate] (Level 2)
  - Implement a search functionality to search transaction details for a particular recipient.
  - Implement Sort on the frontend based on Date, Value date, Balance AMT.

[Bonus points]
  - Implement charts, pie-charts, other visualization displaying different transaction patterns across time

[Guide]
  - Bank account API : http://starlord.hackerearth.com/bankAccount
  - Tech Stack: HTML, CSS with ReactJS or AngularJS

---

# Solution
I have built the as per the level 1 requirements in react(this is kind of practice for me as I'm still new to ReactJS). The code for table and pagnation implementation was written from scratch and no external libraries were used for it(and yeah it took a lot of time :| )
 -- clone the repo with `git clone`
 -- change your current work directory with `cd </path/to/clone-folder-name>`
 -- install the dependencies with `npm install`
 -- run the project with `npm start`

### Live
Working link here -
[Live link](http://saur2729.github.io/vimeo-hiring-hackerearth)

PS - Since while publishing it to github, I was getting error like -
 > react was loaded over HTTPS, but requested an insecure resource 'http://starlord.hackerearth.com/bankAccount'. This request has been blocked; the content must be served over HTTPS.

In order to overcome this, I have used a local json file with api data and Im fetching records from the same file instead of fetching it from the url.

One can use the url to fetch it using the api call when using locally by uncommenting the following piece of code in src/components/dashboard/Main.js -
```
  // useEffect(() => {
  //   async function fetchRecords() {
  //     const response = await fetch("http://starlord.hackerearth.com/bankAccount");
  //     const json = await response.json();
  //     setapiData(json.reverse())
  //     //setapiData(json.sort((a, b) => (parseDate(a.Date) > parseDate(b.Date)) ? -1 : 1))
  //   }
  //   fetchRecords();
  // }, [])
```

and commenting out the immediate below code in src/components/dashboard/Main.js
```
  useEffect(() => {
    async function fetchRecords() {
      const response = require('./api-data.json')
      setapiData(response.reverse())
    }
    fetchRecords();
  }, [])
```

### Results
![Alt text](public/vimeo-pg1.png?raw=true "Page 1 display")
![Alt text](public/vimeo-pg4.png?raw=true "Page 4 display")


### Todos

 - Complete Level 2 and Level 3
 - Implememnt charts using charts.js or any recommened open source Library

License
----

MIT


**Free Software, Hell Yeah!**

