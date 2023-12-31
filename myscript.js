
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var submitBtn = document.getElementById("submitBtn");
var quizHead = document.getElementById("quizHead");
var scoreClass = document.getElementById("scoreClass");
var body = document.getElementById("body")
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var timeCount = 60;
var timeTaken;
var time;
var i = 0;
var num = 1;
var score = 0;
var body=document.getElementById("body");



var wrong = 0;
var attempted;

const quiz_container = document.getElementsByClassName("quiz_container");
const result_container = document.getElementsByClassName("result_container");
const home_container = document.getElementsByClassName("home_container");
const endQuiz = document.getElementById("endQuiz");
const next = document.getElementById("next");
const result_name = document.getElementById("result_name")
const percentage = document.getElementById("percentage");
const wrong_ans = document.getElementById("wrong_ans");
const correct_ans = document.getElementById("correct_ans");
const total_que_attempted = document.getElementById("total_que_attempted");
const time_taken = document.getElementById("time_taken");
const start_again = document.getElementById("start_again");
const go_to_home = document.getElementById("go_to_home");
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');


var cssQueDB = [
    {
        question: "Where in an HTML document is the correct place to refer to an external style field?",
        a: "In the HEAD section",
        b: "In the BODY section",
        c: "At the end of the document",
        d: "All of the above",
        ans: "ans1",
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "SCRIPT",
        b: "CSS",
        c: "STYLE",
        d: "HEAD",
        ans: "ans3",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "styles",
        b: "style",
        c: "class",
        d: "font",
        ans: "ans2",
    },
    {
        question: "How do you insert a comment in a css file?",
        a: " 'this is a comment ",
        b: " //this is a comment ",
        c: " //this is a comment// ",
        d: " /*this is a comment*/ ",
        ans: "ans4",
    },
    {
        question: "Which property is used to change the background color?",
        a: "background color",
        b: "bgcolor",
        c: "color",
        d: "background-color",
        ans: "ans4",
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        a: "color",
        b: "text-color",
        c: "fgcolor",
        d: "All of the above",
        ans: "ans1",
    },
    {
        question: "Which CSS property controls the text size?",
        a: "font-style",
        b: "font-size",
        c: "text-size",
        d: "text-style",
        ans: "ans2",
    },
    {
        question: "How do you make each word in a text start with capital letter?",
        a: "You can't do that with CSS",
        b: "text-style: capitalize",
        c: "transform: capitalize",
        d: "text-transform: capitalize",
        ans: "ans4",
    },
    {
        question: "Which property is used to change the font of an element?",
        a: "font-family",
        b: "font-weight",
        c: "font-style",
        d: "All of the above",
        ans: "ans1",
    },
    {
        question: "What type of language CSS is?",
        a: "Designing Language",
        b: "Mark-Up Language",
        c: "Object Based Language",
        d: "Scripting Language",
        ans: "ans1",
    }
];



var htmlQueDB = [
    {
        question: "How is document type initialized in HTML5?",
        a: "DOCTYPE HTML",
        b: "DOCTYPE",
        c: "!DOCTYPE html",
        d: "/DOCTYPE html",
        ans: "ans3",
    },
    {
        question: "Which of the following symbols indicates the difference between opening and closing tag of HTML?",
        a: " / ",
        b: " @ ",
        c: " . ",
        d: " ? ",
        ans: "ans1",
    },
    {
        question: "Where does the content given inside the TITLE tag appear in the web-page?",
        a: "In the centre of the main page",
        b: "In the BODY section",
        c: "In the tab of the browser",
        d: "None of the above",
        ans: "ans3",
    },
    {
        question: "Which of the following tags is used to define para in HTML?",
        a: "p tag",
        b: "h2 tag",
        c: "span tag",
        d: "i tag",
        ans: "ans1",
    },
    {
        question: "Where you can see the output of any HTML code written?",
        a: "Google Chrome",
        b: "Mozilla firefox",
        c: "Internet Explorer",
        d: "Any web browser",
        ans: "ans4",
    },
    {
        question: "Which of the following is the feature of markup language?",
        a: "That language which use tags",
        b: "The language which is more user friendly",
        c: " which do not have typical programming syntax",
        d: "All of the above",
        ans: "ans4",
    },
    {
        question: "Which of the following is the root element of HTML?",
        a: "html tag",
        b: "doctype html",
        c: "head tag",
        d: "body tag",
        ans: "ans1",
    },
    {
        question: "What is the extension of html files?",
        a: ".html",
        b: ".htm",
        c: ".hl",
        d: ".h",
        ans: "ans1",
    },
    {
        question: "HTML is a prgramming language?",
        a: "Yes",
        b: "No",
        c: "Partially",
        d: "It is a MarkUp language",
        ans: "ans4",
    },
    {
        question: "Full form of HTML?",
        a: "Hello to Malware Loaders",
        b: "Hyper Text Message Language",
        c: "Hyper Text Make Up Language",
        d: "Hyper Text MarkUp Language",
        ans: "ans4",
    }

];

var jsQueDB = [
    {
        question: "JS stands for?",
        a: "Just Script",
        b: "Java Script",
        c: "Just Savage",
        d: "None of the above",
        ans: "ans2",
    },
    {
        question: "The JavaScript language is ",
        a: "Object Based",
        b: "Object Oriented",
        c: "High level",
        d: "Assembly language",
        ans: "ans1",
    },
    {
        question: "Which of the following is true about JS?",
        a: "It is a compiled language ",
        b: "It is a scripting language ",
        c: "It is a assembly language ",
        d: "It is a styling language ",
        ans: "ans2",
    },
    {
        question: "Which of the following tags is used to add JS in the html code?",
        a: "javascript tag",
        b: "script tag",
        c: "scripts tag",
        d: "js tag",
        ans: "ans2",
    },
    {
        question: "Which of the following tag is used to link the external JS file in the HTML code?",
        a: "javacript tag",
        b: "script tag",
        c: "scripts tag",
        d: "js tag",
        ans: "ans2",
    },
    {
        question: "Which of the following is the extension of script file?",
        a: ".javascript",
        b: ".js",
        c: ".s",
        d: ".script",
        ans: "ans2",
    },
    {
        question: "Which of the following attribute has the link of the external JS file?",
        a: "src",
        b: "href",
        c: "link",
        d: "file",
        ans: "ans1",
    },
    {
        question: "In which part of the HTML code, the script can be included?",
        a: "Only inside head tag",
        b: "Only inside body tag",
        c: "Either inside head tag or body tag",
        d: "Only inside meta of head",
        ans: "ans3",
    },
    {
        question: "Which of the following is used by the getElementByID() method to access the elements?",
        a: "Class name of HTML elements",
        b: "Unique id name of HTML elements",
        c: "Tag name of the HTML elements",
        d: "Name of the HTML elements",
        ans: "ans2",
    },
    {
        question: "Which of the following methods is used to access the HTML elements by using the class of the element?",
        a: "getElelmentByClassName",
        b: "getElementByID",
        c: "getByClass",
        d: "hetElementByClass",
        ans: "ans1",
    }
];


var pythonQueDB = [
    {
        question: "What is the correct syntax to print 'hello world' in python?",
        a: "echo 'hello world'",
        b: "p('hello world')",
        c: "print('hello world')",
        d: "echo ('hello world')",
        ans: "ans3",
    },
    {
        question: "How do you insert comments in python code?",
        a: " // this is a comment",
        b: " # this is a comment",
        c: " /* this is a comment*/ ",
        d: " / this is a comment",
        ans: "ans2",
    },
    {
        question: "Which one is not legal variable?",
        a: "my-var",
        b: "_myvar",
        c: "my_var",
        d: "Myvar",
        ans: "ans1",
    },
    {
        question: "How do you insert create a variable with numeric value 5?",
        a: "All the answers are correct",
        b: "x = 5",
        c: "x = int(5)",
        d: "x = '5'",
        ans: "ans2",
    },
    {
        question: "What is the correct file extension for python?",
        a: ".pyt",
        b: ".pt",
        c: ".py",
        d: ".pyth",
        ans: "ans3",
    },
    {
        question: "How do you create a variable with floating number 2.8?",
        a: "All the answers are correct",
        b: "x = 2.8",
        c: "x = float(2.8)",
        d: "x = '2.8'",
        ans: "ans2",
    },
    {
        question: "What is the correct syntax to output the typy of a variable or object in python?",
        a: "print(tyoeof x)",
        b: "print(typeof(x))",
        c: "print(typeOf(x))",
        d: "print(type(x))",
        ans: "ans4",
    },
    {
        question: "What is the correct way to create a function in python?",
        a: "create myFunction():",
        b: "function myFunction():",
        c: "def myFunction():",
        d: "All of the above",
        ans: "ans3",
    },
    {
        question: "Which metgod can be used to remove whitespace from both the beginning and the end of the string?",
        a: "strip()",
        b: "ptrim()",
        c: "trim()",
        d: "len()",
        ans: "ans3",
    },
    {
        question: "Which of the folloeing can be used to return a string in uppercase letters?",
        a: "upper()",
        b: "uppercase()",
        c: "toUpperCase()",
        d: "upperCase()",
        ans: "ans2",
    }
];




submitBtn.onclick = function () {
    var myname = document.getElementById("myname").value;
    var useforhide = document.querySelector(".useforhide");
    
    if (myname == "") {
        alert("Enter The Name To Proceed");
    } else { useforhide.classList.remove("hide"); }
};

function startHtmlQuiz() {
    home_container[0].classList.add("hide");
    quiz_container[0].classList.remove("hide");
    quizHead.innerHTML = "HTML";
    Timer();
    showHtmlQue(0);



    option1.onclick = function () {
        if (htmlQueDB[i].ans == "ans1") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer1.classList.add("correctClass");
            body.classList.add("correctClass");
        } else {
            wrong++;
            answer1.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (htmlQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (htmlQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            } else if (htmlQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option2.onclick = function () {
        if (htmlQueDB[i].ans == "ans2") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer2.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer2.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (htmlQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (htmlQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            } else if (htmlQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option3.onclick = function () {
        if (htmlQueDB[i].ans == "ans3") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer3.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer3.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (htmlQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (htmlQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (htmlQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option4.onclick = function () {
        if (htmlQueDB[i].ans == "ans4") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer4.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer4.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (htmlQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (htmlQueDB[i].ans == ans2) {
                answer2.classList.add("correctClass");
            } else if (htmlQueDB[i].ans == ans3) {
                answer3.classList.add("correctClass");
            }
        }
    };
    next.onclick = function () {
        i++;
        num++;
        body.classList.remove("correctClass");
            body.classList.remove("wrongClass");
            answer1.classList.remove("correctClass")
            answer1.classList.remove("wrongClass")
            answer2.classList.remove("correctClass")
            answer2.classList.remove("wrongClass")
            answer3.classList.remove("correctClass")
            answer3.classList.remove("wrongClass")
            answer4.classList.remove("correctClass")
            answer4.classList.remove("wrongClass")
        if(num<=10) {
            showHtmlQue(i);
        } else {
            showResult();
        }
    }
    start_again.onclick = function () {
        score = 0;
        wrong = 0;
        i=0;
        num=1;
        clearInterval(time);
        timeCount=60;
        Timer();
        scoreClass.innerHTML=0;
        home_container[0].classList.add("hide")
        quiz_container[0].classList.remove("hide");
        result_container[0].classList.add("hide");
        showHtmlQue(0);
    }
}

function startCSSQuiz() {
    home_container[0].classList.add("hide");
    quiz_container[0].classList.remove("hide");
    quizHead.innerHTML = "CSS";

    showCssQue(0);

    Timer();
    option1.onclick = function () {
        if (cssQueDB[i].ans == "ans1") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer1.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer1.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (cssQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (cssQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            } else if (cssQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option2.onclick = function () {
        if (cssQueDB[i].ans == "ans2") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer2.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer2.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (cssQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (cssQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            } else if (cssQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option3.onclick = function () {
        if (cssQueDB[i].ans == "ans3") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer3.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer3.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (cssQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (cssQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (cssQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option4.onclick = function () {
        if (cssQueDB[i].ans == "ans4") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer4.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer4.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (cssQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (cssQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (cssQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            }
        }
    };
    next.onclick = function () {
        i++;
        num++;
        body.classList.remove("correctClass");
            body.classList.remove("wrongClass");
            answer1.classList.remove("correctClass")
            answer1.classList.remove("wrongClass")
            answer2.classList.remove("correctClass")
            answer2.classList.remove("wrongClass")
            answer3.classList.remove("correctClass")
            answer3.classList.remove("wrongClass")
            answer4.classList.remove("correctClass")
            answer4.classList.remove("wrongClass")
        if(num<=10) {
            showCssQue(i);
        } else {
            showResult();
        }
    }
    start_again.onclick = function () {
        score = 0;
        wrong = 0;
        i=0;
        num=1;
        clearInterval(time);
        timeCount=60;
        Timer();
        scoreClass.innerHTML=0;
        home_container[0].classList.add("hide")
        quiz_container[0].classList.remove("hide");
        result_container[0].classList.add("hide");
        showCssQue(0);
    }
}

function startJavascriptQuiz() {
    home_container[0].classList.add("hide");
    quiz_container[0].classList.remove("hide");
    quizHead.innerHTML = "HTML";
   
        showJSQue(0);

    
    Timer();

    option1.onclick = function () {
        if (jsQueDB[i].ans == "ans1") {
            score++;

            scoreClass.innerHTML=`Score:${score}`;
            answer1.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer1.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (jsQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (jsQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            } else if (jsQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option2.onclick = function () {
        if (jsQueDB[i].ans == "ans2") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer2.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer2.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (jsQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (jsQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            } else if (jsQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option3.onclick = function () {
        if (jsQueDB[i].ans == "ans3") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer3.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer3.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (jsQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (jsQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (jsQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option4.onclick = function () {
        if (jsQueDB[i].ans == "ans4") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer4.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer4.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (jsQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (jsQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (jsQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            }
        }
    };
    next.onclick = function () {
        i++;
        num++;
        body.classList.remove("correctClass");
            body.classList.remove("wrongClass");
            answer1.classList.remove("correctClass")
            answer1.classList.remove("wrongClass")
            answer2.classList.remove("correctClass")
            answer2.classList.remove("wrongClass")
            answer3.classList.remove("correctClass")
            answer3.classList.remove("wrongClass")
            answer4.classList.remove("correctClass")
            answer4.classList.remove("wrongClass")
        if(num<=10) {
            showJSQue(i);
        } else {
            showResult();
        }
    };
    start_again.onclick = function () {
        score = 0;
        wrong = 0;
        i=0;
        num=1;
        clearInterval(time);
        timeCount=60;
        Timer();
        scoreClass.innerHTML=0;
        home_container[0].classList.add("hide")
        quiz_container[0].classList.remove("hide");
        result_container[0].classList.add("hide");
        showJSQue(0);
    }
}

function startPythonQuiz() {
    home_container[0].classList.add("hide");
    quiz_container[0].classList.remove("hide");
    quizHead.innerHTML = "PYTHON";

    showPythonQue(0);


    Timer();

    option1.onclick = function () {
        if (pythonQueDB[i].ans == "ans1") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer1.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer1.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (pythonQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (pythonQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            } else if (pythonQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option2.onclick = function () {
        if (pythonQueDB[i].ans == "ans2") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer2.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer2.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (pythonQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (pythonQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            } else if (pythonQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option3.onclick = function () {
        if (pythonQueDB[i].ans == "ans3") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer3.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer3.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (pythonQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (pythonQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (pythonQueDB[i].ans == "ans4") {
                answer4.classList.add("correctClass");
            }
        }
    };
    option4.onclick = function () {
        if (pythonQueDB[i].ans == "ans4") {
            score++;
            scoreClass.innerHTML=`Score:${score}`;
            answer4.classList.add("correctClass");
            body.classList.add("correctClass");

        } else {
            wrong++;
            answer4.classList.add("wrongClass");
            body.classList.add("wrongClass");
            if (pythonQueDB[i].ans == "ans1") {
                answer1.classList.add("correctClass");
            } else if (pythonQueDB[i].ans == "ans2") {
                answer2.classList.add("correctClass");
            } else if (pythonQueDB[i].ans == "ans3") {
                answer3.classList.add("correctClass");
            }
        }
    };
    next.onclick= function () {
        i++;
        num++;
        body.classList.remove("correctClass");
            body.classList.remove("wrongClass");
            answer1.classList.remove("correctClass")
            answer1.classList.remove("wrongClass")
            answer2.classList.remove("correctClass")
            answer2.classList.remove("wrongClass")
            answer3.classList.remove("correctClass")
            answer3.classList.remove("wrongClass")
            answer4.classList.remove("correctClass")
            answer4.classList.remove("wrongClass")
        if(num<=10) {
            showPythonQue(i);
        } else {
            showResult();
        }
    }
    start_again.onclick = function () {
        score = 0;
        wrong = 0;
        i=0;
        num=1;
        clearInterval(time);
        timeCount=60;
        Timer();
        scoreClass.innerHTML=`Score:${score}`;
        home_container[0].classList.add("hide")
        quiz_container[0].classList.remove("hide");
        result_container[0].classList.add("hide");
        showPythonQue(0);
    }
}
function showHtmlQue(i) {

    
    question.innerHTML = `Q ${num}. ${htmlQueDB[i].question}`
    option1.innerHTML = `${htmlQueDB[i].a}`
    option2.innerHTML = `${htmlQueDB[i].b}`
    option3.innerHTML = `${htmlQueDB[i].c}`
    option4.innerHTML = `${htmlQueDB[i].d}`

}
function showCssQue(i) {
    
    question.innerHTML = `Q ${num}. ${cssQueDB[i].question}`
    option1.innerHTML = `${cssQueDB[i].a}`
    option2.innerHTML = `${cssQueDB[i].b}`
    option3.innerHTML = `${cssQueDB[i].c}`
    option4.innerHTML = `${cssQueDB[i].d}`
    
}
function showJSQue(i) {
    
    question.innerHTML = `Q ${num}. ${jsQueDB[i].question}`
    option1.innerHTML = `${jsQueDB[i].a}`;
    option2.innerHTML = `${jsQueDB[i].b}`;
    option3.innerHTML = `${jsQueDB[i].c}`;
    option4.innerHTML = `${jsQueDB[i].d}`;
   
}
function showPythonQue(i) {

    question.innerHTML = `Q ${num}. ${pythonQueDB[i].question}`
    option1.innerHTML = `${pythonQueDB[i].a}`;
    option2.innerHTML = `${pythonQueDB[i].b}`;
    option3.innerHTML = `${pythonQueDB[i].c}`;
    option4.innerHTML = `${pythonQueDB[i].d}`;
    
}

function Timer() {
    time = setInterval(timeC, 1000);
    function timeC() {
        if (timeCount == 0) {

            // showResult();
        } else {
            timer.innerHTML = timeCount;
            timeCount--;
        }
    }
}
function showResult() {
    home_container[0].classList.add("hide");
    quiz_container[0].classList.add("hide");
    result_container[0].classList.remove("hide");
    result_name.innerHTML = myname.value;
    time_taken.innerHTML = (60 - timeCount) + "sec";
    total_que_attempted.innerHTML = `${wrong + score}`;
    correct_ans.innerHTML =`${score}`;
    wrong_ans.innerHTML = `${wrong}`;
    percentage.innerHTML = (score / 10) * 100;
}
endQuiz.addEventListener("click", function () {
    showResult();
    body.classList.remove("correctClass");
    body.classList.remove("wrongClass");

});


go_to_home.onclick = function () {
    clearInterval(time);
    i=0;
    score = 0;
    wrong = 0;
    num=1;
    home_container[0].classList.remove("hide")
    quiz_container[0].classList.add("hide");
    result_container[0].classList.add("hide");
}
window.onload=function(){
    myname.value="";
}