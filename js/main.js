const question = [
     {
       id: 1,
       text:
         " Describe HTML.",
     },
     {
       id: 2,
       text:
         "How do you create links to sections within the same page?",
     },
     {
       id: 3,  
       text:
         "What if there is no text between the tags or if a text was omitted by mistake? Will it affect the display of the HTML file?",
     },
     {
       id: 4,
       text:
         "How do you create a link that will connect to another web page when clicked? ",
     },
     {
     id: 5,
     text:
          "What is a marquee? ",
     },
     {
     id: 6,
     text:
          "Are <br> tags the only way to separate sections of text? ",
     },
     {
     id: 7,
     text:
          "When is it appropriate to use frames? ",
     },
     {
     id: 8,
     text:
          "What is the Application Cache in HTML5 and why it is used? ",
     },
{
     id: 9,
     text:
          "What are the two types of Web Storage in HTML5? ",
     },
     {
     id: 10,
     text:
          "How do you create text on a webpage that will allow you to send an email when clicked? ",
     },
     {
     id: 11,
     text:
          "What are the limitations of CSS?",
     },
     {
     id: 12,
     text:
          "In how many ways can a CSS be integrated as a web page?",
     },
     {
     id: 13,
     text:
          "What does CSS selector mean?",
     },
     {
     id: 14,
     text:
          "Differentiate Class selector from ID selector?",
     },
     {
     id: 15,
     text:
          "How to overrule underlining Hyperlinks? ",
     },
     {
     id: 16,
     text:
          "What is CSS Box Model and what are its elements?",
     },
     {
     id: 17,
     text:
          " Define the flex property of CSS?",
     },
     {
     id: 18,
     text:
          "What is Inline style?",
     },
     {
     id: 19,
     text:
          "How comments can be added in CSS? ",
     },
     {
     id: 20,
     text:
          "Differentiate logical tags from physical tags?",
     },
     {
     id: 21,
     text:
          "How do your insert image in your html?",
     },
     {
     id: 22,
     text:
          "What is the full meaning of CSS?",
     },
     {
     id: 23,
     text:
          "In css what is use to identify class?",
     },
     {
     id: 24,
     text:
          "In css what is use to identify id?",
     },
     {
     id: 25,
     text:
          "In html what tag did you use to make emphasis?",
     },
     {
     id: 26,
     text:
          "In html navigation is inside the?",
     },
     {
     id: 27,
     text:
          "In html did the head tag show in the preview of the browser?",
     },
     {
     id: 28,
     text:
          "What is the first tag in html is?",
     },
     {
     id: 29,
     text:
          "What is Grid",
     },
     {
     id: 30,
     text:
          "In css what is the meaning of outline?",
     },
     {
     id: 31,
     text:
          "What is HTML5?",
     },
     {
     id: 32,
     text:
          "Define Semantic elements in HTML.",
     },
     // {
     // id: 33,
     // text:
     //      "Define attributes in HTML tag",
     // },
     // {
     // id: 34,
     // text:
     //      "Define attributes in HTML tag",
     // },
     // {
     // id: 35,
     // text:
     //      "Define attributes in HTML tag",
     // },
     // {
     // id: 36,
     // text:
     //      "Define attributes in HTML tag",
     // },
   ];

   
   const colors = ["green", "#fff", "blue", "red", "yellow", "#7579E7", "#D2EDF9", "#24ECB6", "#feb633", "#8fec23", "#ec7d23", "#ad33f3" ];
   const quest = document.getElementById("text");
   const questionBox = document.getElementById("question-box");

   let questionTracker = [];
   let currentQuestion=Math.floor(Math.random() * question.length);
   function getCurrent(){
     let currentItem = Math.floor(Math.random() * colors.length);
     while (questionTracker.includes(currentQuestion)) {
       currentQuestion= Math.floor(Math.random() * question.length);
     }
   }
   
   

// load initial item
window.addEventListener('DOMContentLoaded', function(){
  showQuestion(currentQuestion);
});

function showQuestion(currentItem){
     questionTracker.push(currentQuestion);
     if(questionTracker.length == 32){
          var end = alert("The Last Question")
          questionTracker = [];
     }
     const item = question[currentItem];
     quest.textContent = item.text;
   }
   
   // show randomly
   questionBox.addEventListener('click', function(e){
     getCurrent();  
     currentItem = Math.floor(Math.random() * question.length);
     const randomNumber = getRandomNumber();
     questionBox.style.backgroundColor = colors[randomNumber];
     showQuestion(currentQuestion);
   });
   function getRandomNumber(){
     return Math.floor(Math.random() * colors.length);
}
