//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
const questions = [
   {
      question: " وظائف الصبابات في المحرك  ",
      optionA: "تحديد سرعة الحذافة",
      optionB: " تشغيل عمود الحدبات",
      optionC: "تشغيل مضخة الزيت",
	  optionD: "فتح ممرات الادخال والاخراج الموجود في غرفة الاحتراق" ,
      correctOption: "optionD"
    },
    {
      question: "  يعني SAE40 الرمز المطبوع على علبة زيت المحرك ?",
      optionA: " زيت لمحرك الديزل فقط",
      optionB: "درجة لزوجة الزيت",
        optionC: " زيت لمحرك مركبة عمومية فقط",
		optionD: " الشركة المنتجة للزيت",
      correctOption: "optionB"
    },
    {
      question: " طول الشوط معناه?",
      optionA: "حركة البستون عندما يدور الكرنك 180 درجة",
      optionB: "حركة البستون من النقطة الميتة السفلى الى النقطة الميتة العليا",
        optionC: "حركة البستون من النقطة الميتة السفلى الى النقطة الميتة العليا",
        optionD: "كل ما ذكر ",
      correctOption: "optionD"
    },
        {
      question: "  ماذا يمكن ان يبسبب وجود خلل في التيربو",
        optionA: "ضعف في اداء المحرك ",
        optionB: "زيادة سرعة دوران المحرك",
        optionC: "خروج بخار ماء من العادم",
        optionD: "خروج دخان ازرق من العادم ",
      correctOption: "optionA"
    },
	        {
      question: " عند ايقاف محرك ديزل يحتوي على تيربو  يجب ان ",
     
        optionA: "  ابقاء المحرك دون حمل (دون دعس)لفترة   ",
        optionB: " الضغط على دواتسة الوقود قليلا",
        optionC: "رفع درجة حرارة الماء الى 90 ",
        optionD: "  لا يجب عمل شيء ",
      
      correctOption: "optionA"
    },
	        {
      question: " ساعة الدوجان تشير الى",
	  optionA: "  زاوية ميل العجلات الامامية  ",
      optionB: " زاوية ميل العجلات الخلفية",
        optionC: "مقدار ضغط الهواء في خزانات الهواء ",
        optionD: " سرعة دوران المحرك ",
      correctOption: "optionD"
    },
	  {
      question: " ما السبب المتوقع في انخفاض دفع المركبة وارتفاع صوت المحرك ",
 
        optionA: " فراغ في دواسة القابض ( الكلتش) ",
        optionB: "تاكل القرص الاحتكاكي (الكلتش)",
        optionC: "تاكل اصابع القرص الضاغط",
        optionD: "كسر في تروس صندوق الغيارات",
      
     correctOption: "optionB"
    },
	  {
      question: "8- اي من العجلات الخلفية تقطع مسافة اكبر عند الانعطاف يسارا ",
     
        optionA: " العجلتان تقطع نفس المسافة ",
        optionB: " اليمنى",
        optionC: "اليسرى",
        optionD: "اليمنى اذا كان الدفع امامي واليسرى اذا كان الدفع خلفي ",
     
      correctOption:"optionB"
    },
	  {
      question: " وظيفة الكوشينتات ",
      
      optionA: " تقليل الاحتكاك ",
        optionB: " الدوران مع الكرنك ",
        optionC: "تزييت الكرنك",
        optionD: " جميع ما ذكر",
      
      correctOption: "optionD"
    },
	  {
      question: " اذا خرج دخان بلون ازرق من الاكززت فذلك يدل على   ",
      
        optionA: " احتراق الزيت داخل غرفة الاحتراق  ",
        optionB: "احتراق الوقود بشكل غير كامل",
        optionC: "وصول الماء الى غرفة الاحتراق ",
        optionD: "جميع ما ذكر ",
      
      correctOption: "optionA"
    },
	  {
      question: "11- وطيفة حمالة الدراي شفت هي ",
      
       optionA: " المحافظة على دوران العمود بشكل مركزي   ",
        optionB: "السماح بتطويل و تقصير العمود المرفقي  ",
        optionC: " السماح بنقل القوة من مستوى الى اخر",
        optionD: "جميع ما ذكر  ",
      correctOption: "optionA"
    },
	  {
      question: " الفضاوة في جهاز المقود سببها ",
      
        optionA: " اهتراء مسننات بطيخة الستيرنج ",
        optionB: "فضاوة في ذرعان الستيرنج",
        optionC: "اهتراء في مسننات المشط او البنيون في الستيرنج ",
        optionD: " كل ما ذكر صحيح",
      
      correctOption: "optionD"
    },
	  {
      question: "  من احد مميزات النظام ABS ",
      
        optionA: " تقصير مسافة التوقف ",
        optionB: "عدم اهتراء سريع للاطرارات الخلفية",
        optionC: "زيادة السيطرة على المركبة اثناء الفرملة",
        optionD: "كل ما ذكر صحيح",
     
      correctOption: "optionD"
    },
	{
      question: "  من احد نتائج ازالة الثيرموستات من المحرك  ",
      
        optionA: " زيادة الضغط على مضخة المياه ",
        optionB: " اهتراء مضخة المياه",
        optionC: "زيادة استهلاك الوقود",
        optionD: "زيادة احتراق الوقود",
     
      correctOption: "optionB"
    },
	{
      question: "  في اي الاشواط يكون الصمامان مغلقان ",
      
        optionA: " العادم والسسحب ",
        optionB: "العادم والانفجار",
        optionC: " السجب والانفجار",
        optionD: "الانفجار والضغط",
      
      correctOption: "optionD"
    },
	{
      question: "  ترتيب الاجهزة حسب نقل القدرة ",
     
        optionA: " محرك,قابض , صندوق سرعات , عمود نقل حركة, محور خلفي  ",
        optionB: " محرك , صندوق سرعات,قابض ,  عمود نقل حركة, محور خلفي ",
        optionC: "محرك,قابض , صندوق سرعات , محور خلفي  , عمود نقل حركة",
        optionD: " محرك , صندوق سرعات ,قابض, عمود نقل حركة, محور خلفي ",
     
      correctOption: "optionA"
    },
	{
      question: "  ماذا يتم في شوط السحب في محرك الديزل ",
    
        optionA: " سحب مزيج من الهواء والوقود  ",
        optionB: " سحب وضغط مزيج الهواء والوقود ",
        optionC: "سحب وضغط الهواء فقط",
        optionD: " ضغط الهواء فقط ",
     
      correctOption: "optionC"
    },
	{
      question: "  من مميزات نظام الحقن في محركات البنزين",
      
        optionA: "  تقليل استهلاك الوقود و زيادة قدرة المجرك  ",
        optionB: " تقليل وزن المحرك وكلفة الصيانة",
        optionC: " زيادة سرعة المحرك وتقليل العزم ",
        optionD: " تنظيم موعد الشرارة ",
      
      correctOption: "optionA"
    },
	{
      question: "  ما هي وظيفة منطقة الكاربوريتر " ,
   
        optionA: "  اعطاء خلطة فقيرة بالبنزين  ",
        optionB: " مزج الهواء مع البنزين",
        optionC: " اعطاء خلطة غنية بالبنزين ",
        optionD: " لا شيء مما ذكر ",
      correctOption: "optionB"
    },
	
	{
      question: "   عندما يدور المحرك 1000 دورة فان عدد دورات عمود الكام شفط  " ,
        optionA: "  3000  ",
        optionB: " 1000",
        optionC: " 500 ",
        optionD: " 2000 ",
      correctOption: "optionC"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 19) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 9) {
        remark = "ليس كما يجب عليك التركيز اكثر"
        remarkColor = "red"
    }
    else if (playerScore >= 14 && playerScore < 7) {
        remark = "جيد عليك المحاولة اكثر"
        remarkColor = "orange"
    }
    else if (playerScore >= 17) {
        remark = "ممتاز استمر"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 20) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}