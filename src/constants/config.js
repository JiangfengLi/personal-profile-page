/*
    Export resumeData object that contains all the information about resume
*/
export const resumeData = 
{
    main: {
      name: "Jiangfeng Li",
      occupation: "Computer Science Master Student",
      description: "Geek passionate about cutting edge technology, environmental justice and social responsibilities",
      image: "profilepic.jpg",
      bio: "I am currently studying computer science at the University of San Francisco as a master's student. My career goal after graduation is to implement cutting-edge technologies such as full-stack software development, cloud computing and machine learning to ameliorate society and the environment.",
      contactmessage: "Here is where you should write your message to readers to have them get in contact with you.",
      email: "lijiangfeng2016@gmail.com",
      phone: "111-111-0000",
      address: {
        street: "",
        city: "San Francisco",
        state: "California",
        zip: ""
      },
      website: "http://www.timbakerdev.com",
      resumedownload: "",
      social: [
        {
          name: "facebook",
          url: "http://facebook.com",
          className: "fa fa-facebook"
        },
        {
          name: "twitter",
          url: "http://twitter.com",
          className: "fa fa-twitter"
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/jiangfengli66aa57151/",
          className: "fa fa-linkedin"
        },
        {
          name: "instagram",
          url: "http://instagram.com",
          className: "fa fa-instagram"
        },
        {
          name: "github",
          url: "https://github.com/JiangfengLi",
          className: "fa fa-github"
        }
      ]
    },
    resume: {
      skillmessage: "Here you can create a short write-up of your skills to show off to employers",
      education: [
        {
          school: "University of San Francisco",
          degree: "Masters of Science in Computer Science",
          graduated: "May 2022",
          description: "Principles SW Development, Algorithms, Data Processing, Cloud Computing, Master's Project, SDLC etc."
        },
        {
          school: "University of Arizona",
          degree: "Bachelor of Science in Computer Science",
          graduated: "May 2020",
          description: "Mobile Application Programming, Software Engineering, Intro to Machine Learning, Data Visualization etc."
        }
      ],
      work: [
        {
          company: "Jasper",
          title: "Full Stack Intern",
          years: "May 2021 ??? Aug 2021",
          description: ["Collaborated with UI/UX designers and other software engineering interns to create an",
          "embeddable widget/SDK on React patient app for office websites that enables patients to book a time slot with the",
          "providers of office directly and office admin to manage the appointments of patients (patient name, doctor", 
          "name, booking time, service type).",
          "Devised MySQL query statements on AWS Node.js Lambda function to retrieve booked appointments and",
          "office and doctors??? information from the database and sent HTTP responses to the frontend by RESTful API.\n",
          "Reduced the time for the patients to schedule appointments with the office by 30% and raised the volume", 
          "of customers by 20% for the medical offices"]
        },
        {
          company: "Tech Core",
          title: "Full Stack Intern",
          years: "June 2020 ??? Aug 2020",
          description: ["Cooperated to set up WebAuth for Landing Web Page of the project which is aimed to protect endangered",
          "species Lemur. Built the admin page adopting MSSQL as a backend database to store and manage the", 
          "administrators of the LemurID website and publish the main pages of LemurID accessed by over 40,000",
          "students and scholars in the University of Arizona with visual studio.",
          "Trimmed the time to run data for Node.js ML algorithm utilizing knex.js to identify more than 3000 Lemur", 
          "images in different individuals and categories from the database by 50% by altering file path of images", 
          "from JavaScript and feeding the images in file paths extracted from the database to machine to create a", 
          "model within 10 minutes"]
        }
      ],
      skills: [
        {
          name: "Java",
          level: "70%"
        },
        {
          name: "Python",
          level: "50%"
        },
        {
          name: "C",
          level: "60%"
        },
        {
          name: "Javascript",
          level: "65%"
        },
        {
          name: "NodeJS",
          level: "45%"
        },
        {
          name: "ReactJs",
          level: "50%"
        },
        {
          name: "CSS",
          level: "70%"
        },
        {
          name: "HTML5",
          level: "80%"
        },
        {
          name: "MySQL",
          level: "80%"
        },
        {
          name: "MongoDB",
          level: "50%"
        },
        {
          name: "Git",
          level: "60%"
        }
      ]
    },
    portfolio: {
        projects: [
      ]
    },
    testimonials: {
      testimonials: [
      ]
    }
};