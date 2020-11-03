import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./CourseDetails.css";
import CourseHero from "./CourseHero";
import { useState } from 'react'
import { test2 } from '../../components/CourseCard/CourseCard';


const getData = (test2,setData,Data) => {

  switch (test2) {
    case "C":
      return setData = Data.C;
      break;
    case "CPP":
      return setData = Data.CPP;
      break;
    case "Java":
      return setData = Data.Java;
      break;
    case "Python":
      return setData = Data.Python;
      break;
    case "Android":
      return setData = Data.Android;
      break;
    case "FullStack":
      return setData = Data.FullStack;
      break;
    case "Frontend":
      return setData = Data.Frontend;
      break;
    case "Backend":
      return setData = Data.Backend;
      break;
    case "DSA":
      return setData = Data.DSA;
      break;
    case "SystemDesign":
      return setData = Data.SystemDesign;
      break;
    default:
      return setData;
  }
};

const CourseDetails = () => {
  const Data = {
    err: {
      heroContent: {
        headContent: " Most of the programming languages uses compiler written in C language and for the same reason it is known as mother language of all modern programming languages.  Let us begin the journey of the virtual world by learning ABC of programming languages and coding through C.",
        courseHeading: "C",
        image: " "
      },
      features: {
        courseName: "C Programming",
        feature1: "Top industries CTOs as mentors",
        feature2: "Unparalleled personal attention",
        feature3: "One stop school for tech leadership",
        feature4: "Unlock endless possibilities"
    },
    skills: {
      skill1: "git",
      skill2: "JavaScript",
      skill3: "MVC",
      skill4: "Jira",
      skill5: "Api",
      skill6: "XYz",
      
      },
      about: {
        aboutContent: "The computer language that allows maximum control with minimal commands. Because of its flexibility and versatility, It is used in microcontroller, operating systems, drivers, kernels etc. It is a basic building block towards learning of logics behind any other language and make other languages easier to understand.Most of the programming languages uses compiler written in C language and for the same reason it is known as mother language of all modern programming languages. Even languages like C++,  Java, C# etc. use same syntax as of C.Let us begin the journey of the virtual world by learning ABC of programming languages and coding through C."
      },
      courseItenary: {
        accordian1: {
          head: "getting started",
          p1: "Writing our first program , knowing about compile time and runtime errors",
          p2:"basics, keyword and code structure"
        },
        accordian2: {
          head: "Structure of C++",
          p1: "Section over View and Overview of the Structure of a C++ Program",
          p2: "preview, comments, The main() function, Namespace",
          p3: "Basic Input and Output (I/O) using cin and cout",
        },
        accordian3: {
          head: "Variable and constants",
          p1: "Declaring and Initializing Variables",
          p2: "using Variables in an appropiate way",
        },
        accordian4: {
          head: "Array and Vector",
          p1: "Declaring and Initializing arrays and vectors",
          p2: "Accessing and Modifying Array Elements",
          p3: "Multi Dimentional Array",
        },
        accordian5: {
          head: "Statement and Operator",
          p1: "Expressions and Statements and using Operators",
          p2: "The Assignment Operator and Arithmetic Operator",
          p3: "Mixed Expressions Conversions and Operator Function ",
        },
        accordian6: {
          head: "controlling program flow",
          p1: "Conditional operators and efficient usage",
          p2: "Loops and usages",
          p3: "Examples to settle all for good (Includes nested loops: patterns) ",
        },
        accordian7: {
          head: "Characters and string",
          p1: "Character Functions and c-style string with working",
          p2: "C++ - style string",
          p3: "Setting up for a smooth and real life Project",
        },
      },
      triCard: {
        triCard1: "",
        triCard2: "",
        triCard3: ""
      }
    },
      C: {
        heroContent: {
          headContent: " Most of the programming languages uses compiler written in C language and for the same reason it is known as mother language of all modern programming languages.  Let us begin the journey of the virtual world by learning ABC of programming languages and coding through C.",
          courseHeading: "C",
          image: " "
        },
        features: {
          courseName: "C Programming",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
      },
      skills: {
        skill1: "git",
        skill2: "JavaScript",
        skill3: "MVC",
        skill4: "Jira",
        skill5: "Api",
        skill6: "XYz",
        
        },
        about: {
          aboutContent: "The computer language that allows maximum control with minimal commands. Because of its flexibility and versatility, It is used in microcontroller, operating systems, drivers, kernels etc. It is a basic building block towards learning of logics behind any other language and make other languages easier to understand.Most of the programming languages uses compiler written in C language and for the same reason it is known as mother language of all modern programming languages. Even languages like C++,  Java, C# etc. use same syntax as of C.Let us begin the journey of the virtual world by learning ABC of programming languages and coding through C."
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      },
      CPP: {
        heroContent: {
          headContent: ". C++ is best suitable for performance critical apps. This course deals with C++ from the core and makes you understand difference between the two basic languages.",
          courseHeading: "C++",
          image: " "
        },
        features: {
          courseName: "C++",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
        },
        skills: {
          skill1: "git",
          skill2: "JavaScript",
          skill3: "MVC",
          skill4: "Jira",
          skill5: "Api",
          skill6: "XYz",
          
          },
        about: {
          aboutContent: "An extension of C programming language and has the same basic syntax as of c but applications of C++ are widely spread because of extra functions it provides. Apart from developing operating system C++ is widely used in designing games, browsers, VR, robotics and scientific computing. C++ is best suitable for performance critical apps. This course deals with C++ from the core and makes you understand difference between the two basic languages."
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      },
      Java: {
        heroContent: {
          headContent: " From small scale industries to global organisations everywhere Java is used as a key tool to unlock innovation, architecting applications etc. Java is at the heart of our digital lifestyle ",
          courseHeading: "JAVA",
          image: " "
        },
        features: {
          courseName: "JAVA",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
        },
        skills: {
          skill1: "git",
          skill2: "JavaScript",
          skill3: "MVC",
          skill4: "Jira",
          skill5: "Api",
          skill6: "XYz",
          
          },
        about: {
          aboutContent: "It’s the platform independence that makes Java so popular and most used programming language across the globe. From small scale industries to global organisations everywhere Java is used as a key tool to unlock innovation, architecting applications etc. Java is at the heart of our digital lifestyle From commercial ecommerce website to Android apps, from scientific application to financial application like electronic trading system, every other software we use uses Java as programming language. In this source we will make you understand every bit of this important language with an ease."
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      },
      Python: {
        heroContent: {
          headContent: " This course introduces the basics of Python The course is for you if you're a newcomer to Python programming, if you need a refresher on Python basics, or if you may have had some exposure to Python programming but want a more in-depth exposition and vocabulary for describing and reasoning about programs.",
          courseHeading: "Python",
          image: " "
        },
        features: {
          courseName: "Python",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
        },
        skills: {
          skill1: "git",
          skill2: "JavaScript",
          skill3: "MVC",
          skill4: "Jira",
          skill5: "Api",
          skill6: "XYz",
          
          },
        about: {
          aboutContent: "This course introduces the basics of Python The course is for you if you're a newcomer to Python programming, if you need a refresher on Python basics, or if you may have had some exposure to Python programming but want a more in-depth exposition and vocabulary for describing and reasoning about programs. including conditional execution and iteration as control structures, and strings and lists as data structures. You'll program an on-screen Turtle to draw pretty pictures. You'll also learn to draw reference diagrams as a way to reason about program executions, which will help to build up your debugging skills."
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      },
      Android: {
        heroContent: {
          headContent: "Have you ever wondered how the mobile app you are using right now works? The world behind your mobile screen is fascinating enough to attract you to understand the analogy of it. In this course we will be dealing with android application development through JAVA.",
          courseHeading: "Android Application Development",
          image: " "
        },
        features: {
          courseName: "Android Application Development",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
        },
        skills: {
          skill1: "git",
          skill2: "JavaScript",
          skill3: "MVC",
          skill4: "Jira",
          skill5: "Api",
          skill6: "XYz",
          
          },
        about: {
          aboutContent: "Have you ever wondered how the mobile app you are using right now works? The world behind your mobile screen is fascinating enough to attract you to understand the analogy of it. In this course we will be dealing with android application development through JAVA. As the number of mobile phone users is increasing with each passing day, you get ample amount of opportunities to get a prestigious job or to be a freelancer and put yourself a step ahead of others."
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      },
      FullStack: {
        heroContent: {
          headContent: "Finally, you’ll be able to develop a working model for creating your own personal or business websites in the future and be fully prepared to take the next step in a more advanced web development or design course or specialization.",
          courseHeading: "FullStack",
          image: " "
        },
        features: {
          courseName: "FullStack",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
        },
        skills: {
          skill1: "git",
          skill2: "JavaScript",
          skill3: "MVC",
          skill4: "Jira",
          skill5: "Api",
          skill6: "XYz",
          
          },
        about: {
          aboutContent: "This course is designed to start you on a path toward future studies in web development and design, no matter how little experience or technical knowledge you currently have. The web is a very big place, and if you are the typical internet user, you probably visit several websites every day, whether for business, entertainment or education. But have you ever wondered how these websites actually work? How are they built? How do browsers, computers, and mobile devices interact with the web? What skills are necessary to build a website? With almost 1 billion websites now on the internet, the answers to these questions could be your first step toward a better understanding of the internet and developing a new set of internet skills.  By the end of this course you’ll be able to describe the structure and functionality of the world wide web, create dynamic web pages using a combination of HTML, CSS, and JavaScript, apply essential programming language concepts when creating HTML forms, select an appropriate web hosting service, and publish your webpages for the world to see. Finally, you’ll be able to develop a working model for creating your own personal or business websites in the future and be fully prepared to take the next step in a more advanced web development or design course or specialization."
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      },
      Frontend: {
        heroContent: {
          headContent: "This course explores JavaScript based front-end application development, and in particular the React library (Currently Ver. 16.3). This course will use JavaScript ES6 for developing React application. You will also get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. ",
          courseHeading: "Frontend",
          image: " "
        },
        features: {
          courseName: "Frontend",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
        },
        skills: {
          skill1: "git",
          skill2: "JavaScript",
          skill3: "MVC",
          skill4: "Jira",
          skill5: "Api",
          skill6: "XYz",
          
          },
        about: {
          aboutContent: "This course explores JavaScript based front-end application development, and in particular the React library (Currently Ver. 16.3). This course will use JavaScript ES6 for developing React application. You will also get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. You will be introduced to various aspects of React components. You will learn about React router and its use in developing single-page applications. You will also learn about designing controlled forms. You will be introduced to the Flux architecture and Redux. You will explore various aspects of Redux and use it to develop React-Redux powered applications. You will then learn to use Fetch for client-server communication and the use of REST API on the server side. A quick tour through React animation support and testing rounds off the course. You must have preferably completed the previous course in the specialization on Bootstrap 4, or have a working knowledge of Bootstrap 4 to be able to navigate this course. Also a good working knowledge of JavaScript, especially ES 5 is strongly recommended."
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      },
      Backend: {
        heroContent: {
          headContent: " This course presents an overview of a variety of Web backend topics: handling user input, producing templated output, storing information in databases and data stores, and building systems with secure user accounts.",
          courseHeading: "Backend",
          image: " "
        },
        features: {
          courseName: "Backend",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
        },
        skills: {
          skill1: "git",
          skill2: "JavaScript",
          skill3: "MVC",
          skill4: "Jira",
          skill5: "Api",
          skill6: "XYz",
          
          },
        about: {
          aboutContent: "The computer language that allows maximum control with minimal commands. Because of its flexibility and versatility, It is used in microcontroller, operating systems, drivers, kernels etc. It is a basic building block towards learning of logics behind any other language and make other languages easier to understand.Most of the programming languages uses compiler written in C language and for the same reason it is known as mother language of all modern programming languages. Even languages like C++,  Java, C# etc. use same syntax as of C.Let us begin the journey of the virtual world by learning ABC of programming languages and coding through C."
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      },
      DSA: {
        heroContent: {
          headContent: "To solve the real world complex problems and to answer questions in an interview of a product based company DS and Algo. are mandatory as majority of questions that are going to be fired upon you will be related to these two things only. We are here to make it easy for you.",
          courseHeading: "Data Structures and Algo",
          image: " "
        },
        features: {
          courseName: "Data Structures and Algo",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
        },
        skills: {
          skill1: "git",
          skill2: "JavaScript",
          skill3: "MVC",
          skill4: "Jira",
          skill5: "Api",
          skill6: "XYz",
          
          },
        about: {
          aboutContent: "Data structure and Algorithm play an important role in implementing any software. Software developers have to make right decisions when it comes to solving real time problems. The correct procedure to choose the best out of given options is what we are going to learn in this course through DS and Algo. To solve the real world complex problems and to answer questions in an interview of a product based company DS and Algo. are mandatory as majority of questions that are going to be fired upon you will be related to these two things only. We are here to make it easy for you."
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      },
      SystemDesign: {
        heroContent: {
          headContent: "After completing this course, you will have the knowledge to plan and set-up a real-time system both on paper and in practice. The course centers around the problem of achieving timing correctness in embedded systems, which means to guarantee that the system reacts within the real-time requirements.",
          image: " "
        },
        features: {
          courseName: "System Design",
          feature1: "Top industries CTOs as mentors",
          feature2: "Unparalleled personal attention",
          feature3: "One stop school for tech leadership",
          feature4: "Unlock endless possibilities"
        },
        skills: {
          skill1: "git",
          skill2: "JavaScript",
          skill3: "MVC",
          skill4: "Jira",
          skill5: "Api",
          skill6: "XYz",
          
          },
        about: {
          aboutContent: "This course is intended for the Master's student and computer engineer who likes practical programming and problem solving! . After completing this course, you will have the knowledge to plan and set-up a real-time system both on paper and in practice. The course centers around the problem of achieving timing correctness in embedded systems, which means to guarantee that the system reacts within the real-time requirements. Examples of such systems include airbags, emergency breaks, avionics, and also multi-media systems like video playback and QoS in web servers. The course teaches how to plan real-time systems in theory using established mathematical proofs and how to implement them in practice by using the most common scheduling methods. We also learn and how to program the system in the C language using the FreeRTOS real-time kernel. Finally we have a look at the future of real-time systems namely multi-core real-time systems!"
        },
        courseItenary: {
          accordian1: {
            head: "getting started",
            p1: "Writing our first program , knowing about compile time and runtime errors",
            p2:"basics, keyword and code structure"
          },
          accordian2: {
            head: "Structure of C++",
            p1: "Section over View and Overview of the Structure of a C++ Program",
            p2: "preview, comments, The main() function, Namespace",
            p3: "Basic Input and Output (I/O) using cin and cout",
          },
          accordian3: {
            head: "Variable and constants",
            p1: "Declaring and Initializing Variables",
            p2: "using Variables in an appropiate way",
          },
          accordian4: {
            head: "Array and Vector",
            p1: "Declaring and Initializing arrays and vectors",
            p2: "Accessing and Modifying Array Elements",
            p3: "Multi Dimentional Array",
          },
          accordian5: {
            head: "Statement and Operator",
            p1: "Expressions and Statements and using Operators",
            p2: "The Assignment Operator and Arithmetic Operator",
            p3: "Mixed Expressions Conversions and Operator Function ",
          },
          accordian6: {
            head: "controlling program flow",
            p1: "Conditional operators and efficient usage",
            p2: "Loops and usages",
            p3: "Examples to settle all for good (Includes nested loops: patterns) ",
          },
          accordian7: {
            head: "Characters and string",
            p1: "Character Functions and c-style string with working",
            p2: "C++ - style string",
            p3: "Setting up for a smooth and real life Project",
          },
        },
        triCard: {
          triCard1: "",
          triCard2: "",
          triCard3: ""
        }
      }

  };
  let setData = Data.err;
  //   = {
  //   heroContent: {
  //     headContent: " Most of the programming languages uses compiler written in C language and for the same reason it is known as mother language of all modern programming languages.  Let us begin the journey of the virtual world by learning ABC of programming languages and coding through C.",
  //     courseHeading: "C",
  //     image: " "
  //   },
  //   features: {
  //     courseName: "C Programming",
  //     feature1: "Top industries CTOs as mentors",
  //     feature2: "Unparalleled personal attention",
  //     feature3: "One stop school for tech leadership",
  //     feature4: "Unlock endless possibilities"
  //   },
  //   skills: {
  //     skill1: "git",
  //     skill2: "JavaScript",
  //     skill3: "MVC",
  //     skill4: "Jira",
  //     skill5: "Api",
  //     skill6: "XYz",
    
  //   },
  //   about: {
  //     aboutContent: "The computer language that allows maximum control with minimal commands. Because of its flexibility and versatility, It is used in microcontroller, operating systems, drivers, kernels etc. It is a basic building block towards learning of logics behind any other language and make other languages easier to understand.Most of the programming languages uses compiler written in C language and for the same reason it is known as mother language of all modern programming languages. Even languages like C++,  Java, C# etc. use same syntax as of C.Let us begin the journey of the virtual world by learning ABC of programming languages and coding through C."
  //   },
  //   triCard: {
  //     triCard1: "",
  //     triCard2: "",
  //     triCard3: ""
  //   }
  // };
 
  
  
 
  const { heroContent, features, skills, about, courseItenary, triCard } = getData(test2,setData,Data);
  return (
    <div className="courseDetails">
      <CourseHero heroContent={heroContent} features={features} about={about} courseItenary={courseItenary} triCard={triCard} skill={skills} />
      
    </div>
  );
};
export default CourseDetails;
