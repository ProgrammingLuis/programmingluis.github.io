<!DOCTYPE html>

<html lang="en">
  <head>
    <title>Luis Hernandez | Home</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">

    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700" rel="stylesheet">

    
  </head>
  <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
 
    <nav class="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

		 <div class="container">
	
        <div class="collapse navbar-collapse justify-content-md-center" id="navbars">
          <ul class="navbar-nav">
            <li class="nav-item"><a onclick='init();' id="home" class="nav-link" href="#section-home">Home |</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-about">About |</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    

   
    
    <section class="site-hero" style="background-image: url(images/image_1.jpg);" id="section-home" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row pt-1 align-items-center justify-content-center">
          <div class="col-md-10 text-center">
            <h1>Luis Hernandez</h1>
            <p style="color:white;font-size:28px">Aspriring software engineer who wants to use his problem-solving skills to contribute to the field of computer science.</p>
          </div>
        </div>
      </div>
    </section>

  
    <section class="site-section" id="section-about">
      <div class="container">
	  
        <div class="row pt-2">
          <div class="col-md-12 mb-12">
            <div class="section-heading">
              <h2><strong>About Me</strong></h2>
            </div>
            <p class="lead">I have always been a computer nerd. I grew up around video games and computers. I didn't get into programming until I took a course in high school about it. After that, I realized that programming was my passion. I now attend the University of Michigan and there are so many computer science-related opportunities here that I am extremely grateful for. Besides programming (which takes up most of my time), I like to watch anime, play video games, be active, and lead a simple life.</p>
		  </div>
        </div>

        <div class="row pt-2">
          <div class="col-md-12 mb-12">
            <div class="section-heading">
              <h2><strong>Skills</strong></h2>
			   <p class="lead"></br>Programming/Scripting Languages: (Proficient) Java, C, C++, Verilog/SystemVerilog; (Familiar) Python, C#, Javascript, MATLAB, VHDL
</br></br>Frameworks and tools: Git, Windows 10, Windows Driver Frameworks, SDL cross-platform graphics library for C/C++
</p></div></div></div>

<div class="row pt-2">
          <div class="col-md-12 mb-12">
            <div class="section-heading">
              <h2><strong>Experience</strong></h2>
			   <p class="lead"></br>Research Assistant at the University of Michigan School of Radiology. I research medical ultrasound imaging techniques and try to improve them with FPGA boards in SystemVerilog.
</p></div></div></div>

<div class="row pt-2">
          <div class="col-md-12 mb-12">
            <div class="section-heading">
              <h2><strong>Education</strong></h2>
			   <p class="lead"></br>University of Michigan, Ann Arbor, MI </br></br>
Pursuing Bachelors of Science, Computer Science, College of Literature, Science, and the Arts, 2023

</p></div></div></div>
          </div>
      </div>
    </section>

    <section class="site-section bg-light" id="section-contact">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5">
            <div class="section-heading text-center">
              <h2>Contact Information</h2>
			  <p class="lead"></br>Primary Email: hluis@umich.edu</br></br>Secondary Email: programmingluis@gmail.com
				</p>
            </div>
          </div>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <footer class="site-footer">
      <div class="container">
        <div class="row mb-3">
          <div class="col-md-12 text-center">
            <p>
              <a href="https://www.linkedin.com/in/programmingluis/" class="social-item" style="background-image: url(images/linkedinIcon.png);"></a>
              <a href="https://www.github.com/programmingluis/" class="social-item" style="background-image: url(images/githubIcon.png);"></a>
            </p>
			
          </div>
        </div>
        <div class="row">
            <p class="col-12 text-center">
            Copyright &copy; <script>document.write(new Date().getFullYear());</script> | Luis Hernandez</a>
            </p>
        </div>
      </div>
    </footer>
	
	<script>function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomLetter() {
 var alphabet = ['_', '#', ',', '$', '!', '*', '>', '+', '?']
 return alphabet[rand(0,alphabet.length - 1)]
}
function getRandomWord(word) {
  var text = word.innerHTML
  
  var finalWord = ''
  for(var i=0;i<text.length/2;i++) {
    finalWord += text[i] == ' ' ? ' ' : getRandomLetter()
  }
  
  for(var i=text.length-1;i>text.length/2;i--) {
    finalWord += text[i] == ' ' ? ' ' : getRandomLetter()
  }
 
  return finalWord
}

var word = document.querySelector('h1')
var interv = 'undefined'
var canChange = false
var globalCount = 0
var count = 0
var INITIAL_WORD = word.innerHTML;
var isGoing = false

function init() {
 if(isGoing) return;
 
 isGoing = true
 var randomWord = getRandomWord(word)
 word.innerHTML = randomWord

 interv = setInterval(function() {
  var finalWord = ''
  for(var x=0;x<INITIAL_WORD.length;x++) {
   if(x <= count && canChange) {
    finalWord += INITIAL_WORD[x]
   } else {
    finalWord += getRandomLetter()
   }
  }
  word.innerHTML = finalWord
  if(canChange) {
    count++
  }
  if(globalCount >= 20) {
   canChange = true
  }
  if(count>=INITIAL_WORD.length) {
   clearInterval(interv)
   count = 0
   canChange = false
   globalCount = 0
   isGoing = false
  }
  globalCount++
 },50)
 
}

window.onload = function() {
  init();
};

</script>
	
  </body>
</html>