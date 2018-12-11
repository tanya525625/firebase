$(document).ready ( function (){
    $.ajax({
        type: "GET",
        url:'/questionsList',
        dataType:"json",
        success: function(data){
            console.log(data);
            questions = data;
            ShowQuestions(questions);
        }
    });
});

function ShowQuestions(questions){
    for (var i=0; i<questions.length; i++) {
        var list = '<div class = "Question">'+ questions[i].question + '</div>';
        document.getElementById('questionField').innerHTML += list;
    }
}

function directProfile(){
    document.location.href = "/profile.html";
}