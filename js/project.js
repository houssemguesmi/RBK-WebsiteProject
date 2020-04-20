$(document).ready(function() {
    for(var i=0; i<room.length; i++){
        var us=room[i].user;
        if(us==='ADMIN'){
            $('.roommessages').append(us+': '+room[i].message+'\n')
        }else if(us!=='ADMIN'){
            $('.roommessages').append(users[us].name+': '+room[i].message+'\n')
        }
    }
    var cond=true; 
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
        
    });
    $('.limiter').hide()
    $('#scroll').hide()
    $('.log').click(function() {
        $('.limiter').show()
        $('#scroll').show()
        $('.limiter').animate({opacity:1},1500)
        $('.log').animate({opacity:0},2500)
        $('.main').css('filter','blur(4px)')
        $('.main').css('-webkit-filter','blur(4px)')
        $('.log').hide()
        // if(cond===true){
        //     if (  $('#scroller').css( "transform" ) == 'none' ){
        //         $('#scroller').css("transform","rotate(180deg)");
        //     } else {
        //         $('#scroller').css("transform","" );
        //     }
        //     $('#scroll').animate({bottom:'0px', height:'80%', opacity:1},1500)
        //     $('#scroller').animate({top:'18%', bottom:'80%'},1500)
        //     cond=false;
        // }else 
        if(cond===false){
            if (  $('#scroller').css( "transform" ) == 'none' ){
                $('#scroller').css("transform","rotate(180deg)");
            } else {
                $('#scroller').css("transform","" );
            }
            $('#scroll').animate({bottom:'0px', height:'0px', opacity:'0'},1500)
            $('#scroller').animate({top:'96%', bottom:'0'},1500)
            $('#scroll').fadeOut(0,000001)
            cond=true;
        }
    })
    $('#home').click(function() {
        $('.limiter').animate({opacity:0},1500)
        $('.limiter').fadeOut(500)
        $('.main').css('filter','')
        $('.main').css('-webkit-filter','')
        $('.log').show()
        $('.log').animate({opacity:1},2500)
        $('#id').val('')
        $('#pass').val('')
    })
     
    $('#scroller').click(function(x) {
        $('#scroll').show()
        x.preventDefault();
        if(cond===true){
            if (  $( this ).css( "transform" ) == 'none' ){
                $(this).css("transform","rotate(180deg)");
            } else {
                $(this).css("transform","" );
            }
            $('#scroll').animate({bottom:'0px', height:'80%', opacity:1},1500)
            $('#scroller').animate({top:'18%', bottom:'80%'},1500)
            cond=false;
        }else if(cond===false){
            if (  $( this ).css( "transform" ) == 'none' ){
                $(this).css("transform","rotate(180deg)");
            } else {
                $(this).css("transform","" );
            }
            $('#scroll').animate({bottom:'0px', height:'0px', opacity:'0'},1500)
            $('#scroller').animate({top:'96%', bottom:'0'},1500)
            $('#scroll').fadeOut(0,000001)
            cond=true;
        }
    })
    
    $('#logg').click(function(x) {
        var nb=0;
        x.preventDefault();
        var id=$('#id').val()
        var pass=$('#pass').val()
        if(id!=='' && pass!==''){
            for(var key in users) {
                if(id===key && pass===users[key].password){
                    currentUser=id;
                    $('.main').fadeOut(1500);
                    $('.limiter').fadeOut(1500);
                    $('.container-fluid').fadeIn(1500);
                    $('.main').css('filter','')
                    $('.main').css('-webkit-filter','')
                    $('.log').animate({opacity:0},1500)
                    $('.log').hide()
                    $('#id').val('')
                    $('#pass').val('')
                    var myIDs=Object.keys(users);
                    for (var i=0; i<myIDs.length;i++){
                        var getID=myIDs[i]
                        if ( getID  in users && getID !== currentUser && getID !== "ADMIN"){
                            if(users[getID].status==='Online'){
                                $("#studentsBar").append('<div><div id="greencircle"></div><button href="#" class="nameButton btn" id="'+getID+'">'+ users[getID].name+'</button></div>')
                            }else if(users[getID].status==='Offline'){
                                $("#studentsBar").append('<div><div id="redcircle"></div><button href="#" class="nameButton btn" id="'+getID+'">'+ users[getID].name+'</button></div>')
                            }
                        }
                    }
                    $('#RemarquesDiv').html('').append('<div id="textRemarques"><ul id="remarques"></ul></div><table><tr><th><textarea id="newRemarque" ></textarea></th><th><button id="remarqueButton">send</button></th></tr></table></textarea>');    
                    for(var k=0; k<users.ADMIN.messages.length; k++){
                        for(var key in users.ADMIN.messages[k]){
                            if(key===currentUser){
                                for(var j=0; j<users.ADMIN.messages[k][key].length; j++){
                                    $('#remarques').append('<li>'+users.ADMIN.messages[k][key][j]+'</li>')
                                }
                            }
                        }
                    }
                    init()
                    $('#err').text('')
                    break;
                }else if((id !== key) || (pass !== users[key].password)){
                    nb++
                }
            }
            if(nb===21){
                $('#err').text('Invalid ID or password!')
                $('#id').val('')
                $('#pass').val('')
            }
        }else{
            alert('ID and password Should not be empty')
        }
    
    })
    

    


});
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// 
function init(){
    //////////////////////////////////NOUHAAA///////////////////////////////////////
$('#idendityDiv').hide();
$('#absencesDiv').hide();
$('#RemarquesDiv').hide();
$('#chatRoom').hide()

var check=true;
$("#collapseBotton").click(function(){      
    if(check===true){
        if (  $( this ).css( "transform" ) == 'none' ){
            $(this).css("transform","rotate(90deg)");
        } else {
            $(this).css("transform","" );
        }
      $("#sidebar").animate( {"left": "-14%"}, 500, "linear" );
      $('#rightSide').animate({"left": "-14%"}, 500, "linear" )
      check=false;
    }
    else if(check===false){
        if (  $( this ).css( "transform" ) == 'none' ){
            $(this).css("transform","rotate(80deg)");
        } else {
            $(this).css("transform","" );
        }
        $("#sidebar").animate( {"left": "0%"}, 500, "linear" );
        $("#rightSide").animate( {"left": "0%"}, 500, "linear" );
        check=true;
    }
})


$('#barLogo').click(function() {
    $('#profileDiv').hide()
    $('#chatRoom').show()
    $('body').css('height','100vh').css('width','100vw').css('position','absolute')
    $('.room').click(function() {
        if($('.roomText').val() !== ''){
            var message=$('.roomText').val()
            var obj={user:currentUser, message:message}
            room.push(obj)
            $('.roomText').val('')
            if(currentUser==='ADMIN'){
                $('.roommessages').append(currentUser+': '+message+'\n')
                $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight)
            }else if(currentUser!=='ADMIN'){
                $('.roommessages').append(users[currentUser].name+': '+message+'\n')
                $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight)
            }
        }
    })
})


//Verify Role 
///////////////////////////////// ADMIN/////////////////////////////////////////////////
if(users[currentUser].name==="ADMIN"){ /*alert("ok")*/
var user=users[currentUser];
    $('#rightSide').css('background-image',"url('PAGE/admin.png')");
    $('#rightSide').prepend('<p class="h1" id="userName">Hello <a id="clickHome">'+user.name+'</a></p>')
    $('#rightSide').prepend('<button class="log" id="logout">Logout</button>')
    $("#clickHome").click(function(){$('#logout').remove();$('#idendityDiv').html('');$('#chatDiv').remove(); $('#absencesDiv').html(''); $('#userName').remove(); init()})  
    $('#logout').click(function(){
        $('#idendityDiv').html('');
        $('#chatDiv').remove();
        $('#absencesDiv').html('');
        $('#userName').remove();
        $('#logout').remove()
        $('#studentsBar').html('')
        $('.container-fluid').fadeOut(300);
        $('.main').fadeIn(300);
        $('.log').show()
        $('.log').animate({opacity:1},300)
    })                                       
    ////// on click in ADMIN account
    $(".btn").click(function(){
        $('#idendityDiv').show();
        $('#absencesDiv').show();
        $('#RemarquesDiv').show();
        $('#chatRoom').hide()
        $('#userName').show()
        $('#absencesDiv').html('');
        $('#profileDiv').show()
        $('#RemarquesDiv').html('').append('<div id="textRemarques"><ul id="remarques"></ul></div><table><tr><th><textarea id="newRemarque" ></textarea></th><th><button id="remarqueButton">send</button></th></tr></table></textarea>');    
        var indexOfUserMessage=0;
        var arrayOfAdminMessages=users["ADMIN"].messages;
        for(var i=0; i<users["ADMIN"].messages.length;i++){
            if(this.id in arrayOfAdminMessages[i] ){
                for(var j=0; j<arrayOfAdminMessages[i][this.id].length;j++){                
                      $('#remarques').append('<li>'+users["ADMIN"].messages[i][this.id][j]+'</li>')
                      indexOfUserMessage=i
                      
                }
            }         
        }
        var user=this.id;
        $("#clickHome").click(function(){$('#logout').remove();$('#idendityDiv').html('');$('#chatDiv').remove(); $('#absencesDiv').html(''); $('#userName').remove(); init()})  
        $('#remarqueButton').click(function(){
            $('#remarques').append('<li>'+$('#newRemarque').val()+'</li>');
            //alert(users["ADMIN"].messages[indexOfUserMessage][user])
            var arr=users["ADMIN"].messages[indexOfUserMessage][user]
            arr.push($('#newRemarque').val())
            $('#newRemarque').val('')
        })



        for (var i=0; i<absence[this.id].length;i++){
            if(absence[this.id][i]==="present"){
                $('#absencesDiv').append('<div class="presentDiv">'+days[i]+'<div>') 
                $('.presentDiv').animate({width:'80%'},1000)
                }
            else if(absence[this.id][i]==="late"){
                $('#absencesDiv').append('<div class="lateDiv">'+days[i]+'<div>') 
                $(".lateDiv").animate({width:'50%'},1000)
            }
            else if(absence[this.id][i]==="absent"){
                $('#absencesDiv').append('<div class="absentDiv">'+days[i]+'<div>')
                $('.absentDiv').animate({width:'30%'},1000)
            }
        }
        $('#idendityDiv').html('');
        $('#idendityDiv').append('<img id="profilePhoto" src="PAGE/'+users[this.id].gender+'.jpg"><br><br>')
        $('#idendityDiv').append('<label> Name : </label> <input id="nameInput" type="text" value="'+users[this.id].name +'"><br>')
        $('#idendityDiv').append('<label> Status : </label> <input disabled id="nameInput" type="text" value="'+users[this.id].status +'"><br>')
        $('#idendityDiv').append('<label> Phone : </label> <input id="nameInput" type="text" value="'+users[this.id].phone +'"><br>')
        $('#idendityDiv').append('<label> email : </label> <input id="nameInput" type="text" value="'+users[this.id].email +'"><br>')
        $('#idendityDiv').append('<label> Role : </label> <input id="nameInput" type="text" value="'+users[this.id].rights +'"><br>')
        $('#profileDiv').prepend($('#idendityDiv'))
        $('#idendityDiv').show();
})

}
///////////////////////////////// USER/////////////////////////////////////////////////
if(users[currentUser].name!=="ADMIN"){
        //interface user user
        var user=users[currentUser];
    $('#rightSide').css('background-image',"URL('PAGE/rbk1.png')");
    $('#userName').remove()
    $('#rightSide').prepend('<p class="h1" id="userName">Hello <b><a id="clickHome"> '+user.name+'</a></b></p>')
    $('#rightSide').prepend('<b><button class="log" id="logout">Logout</button></b>')
    $('#idendityDiv').append('<img id="profilePhoto" src="PAGE/'+user.gender+'.jpg"><br><br>')
    $('#idendityDiv').append('<label> Name : </label> <input id="nameInput" type="text" value="'+user.name +'"><br>')
    $('#idendityDiv').append('<label> Status : </label> <input disabled id="nameInput" type="text" value="'+user.status +'"><br>')
    $('#idendityDiv').append('<label> Phone : </label> <input id="nameInput" type="text" value="'+user.phone +'"><br>')
    $('#idendityDiv').append('<label> email : </label> <input id="nameInput" type="text" value="'+user.email +'"><br>')
    $('#idendityDiv').append('<label> Role : </label> <input disabled id="nameInput" type="text" value="'+user.rights +'"><br>')
    $('#idendityDiv').append('<label> password : </label><input id="nameInput" type="password" value="'+user.password +'"><br>')
    $('#profileDiv').prepend($('#idendityDiv'))
    $('#idendityDiv').show();
    $('#absencesDiv').show();
    $('#RemarquesDiv').show();
    $('#newRemarque').attr('disabled','true')
    $('#remarqueButton').attr('disabled','true')

    for (var i=0; i<absence[currentUser].length;i++){
        if(absence[currentUser][i]==="present"){
         $('#absencesDiv').append('<div class="presentDiv">'+days[i]+'<div>') 
            $('.presentDiv').animate({width:'80%'},1000)
        }
        else if(absence[currentUser][i]==="late"){
            $('#absencesDiv').append('<div class="lateDiv">'+days[i]+'<div>') 
            $(".lateDiv").animate({width:'50%'},1000)
        }
        else if(absence[currentUser][i]==="absent"){
            $('#absencesDiv').append('<div class="absentDiv">'+days[i]+'<div>')
            $('.absentDiv').animate({width:'30%'},1000)
        }
    }
    $("#clickHome").click(function(){$('#logout').remove();$('#idendityDiv').html('');$('#chatDiv').remove(); $('#absencesDiv').html(''); $('#userName').remove(); init()})
    $('#logout').click(function(){
        $('#idendityDiv').html('');
        $('#chatDiv').remove();
        $('#absencesDiv').html('');
        $('#userName').remove();
        $('#logout').remove()
        $('#studentsBar').html('')
        $('.container-fluid').fadeOut(300);
        $('.main').fadeIn(300);
        $('.log').show()
        $('.log').animate({opacity:1},300)
    })

            $(".btn").click(function(){
                var clicked=this.id
                $('#profileDiv').show()
                $('#chatRoom').hide()
                $('#absencesDiv').hide();
                $('#RemarquesDiv').hide();
                $('#chatDiv').remove();
                $('#idendityDiv').html('');
                $('#idendityDiv').append('<img id="profilePhoto" src="PAGE/'+users[this.id].gender+'.jpg"><br><br>')
                $('#idendityDiv').append('<label> Name : </label> <input disabled id="nameInput" type="text" value="'+users[this.id].name +'"><br>')
                $('#idendityDiv').append('<label> Status : </label> <input disabled id="nameInput" type="text" value="'+users[this.id].status +'"><br>')
                $('#idendityDiv').append('<label> Phone : </label> <input disabled id="nameInput" type="text" value="'+users[this.id].phone +'"><br>')
                $('#idendityDiv').append('<label> email : </label> <input disabled id="nameInput" type="text" value="'+users[this.id].email +'"><br>')
                $('#idendityDiv').append('<label> Role : </label> <input disabled id="nameInput" type="text" value="'+users[this.id].rights +'"><br>')
                $('#profileDiv').append($('#idendityDiv'))
                $('#idendityDiv').show();
                $('#profileDiv').prepend('<div id="chatDiv"><div id="messages"></div><table><tr><th><textarea id="newChat" ></textarea></th><th><button id="chatButton">send</button></th></tr></table></textarea></div>')
                for(var i=0; i<users[currentUser].conversations.length; i++){
                    if(users[currentUser].conversations[i].user===this.id){
                        for(var j=0; j<users[currentUser].conversations[i].discussion.length; j++){
                            if(users[currentUser].conversations[i].discussion[j].sender === currentUser){
                                $('#messages').append('<li class="right">'+users[currentUser].conversations[i].discussion[j].message+'</li>')
                            }else if(users[currentUser].conversations[i].discussion[j].sender === this.id){
                                $('#messages').append('<li class="left">'+users[currentUser].conversations[i].discussion[j].message+'</li>')
                            }
                        }
                    }
                }
            //  $('#idendityDiv').animate({"left": "850px"}, "slow")//, "linear")
            $("#clickHome").click(function(){$('#logout').remove();$('#idendityDiv').html('');$('#chatDiv').remove(); $('#absencesDiv').html(''); $('#userName').remove(); init()})
            $('#chatButton').click(function() {
                var nb=0;
                var nb2=0;
                var newchat=$('#newChat').val()
                var obj={sender:currentUser, message:newchat, date:time.getDate()}
                //pushing into the currentUser's array
                if(users[currentUser].conversations.length!==0){
                    for(var i=0; i<users[currentUser].conversations.length; i++){
                        if(users[currentUser].conversations[i].user===clicked){      
                            users[currentUser].conversations[i].discussion.push(obj)
                            $('#messages').append('<li class="right">'+obj.message+'</li>')
                            $('#newChat').val('')
                            nb=0;
                            break;
                        }else if(users[currentUser].conversations[i].user!==clicked){
                            nb++;
                        }
                    }if(nb===users[currentUser].conversations.length){
                        var obj2={user:clicked,discussion:[]}
                        obj2.discussion.push(obj)
                        users[currentUser].conversations.push(obj2)
                        $('#messages').append('<li class="right">'+obj.message+'</li>')
                        $('#newChat').val('')
                    }
                }else if(users[currentUser].conversations.length===0){
                    var obj2={user:clicked,discussion:[]}
                    obj2.discussion.push(obj)
                    users[currentUser].conversations.push(obj2)
                    $('#messages').append('<li class="right">'+obj.message+'</li>')
                    $('#newChat').val('')
                }
                //pushing into the clicked user's array
                if(users[clicked].conversations.length!==0){
                    for(var j=0; j<users[clicked].conversations.length; j++){
                        if(users[clicked].conversations[j].user===currentUser){      
                            users[clicked].conversations[j].discussion.push(obj)
                            nb=0;
                            break;
                        }else if(users[clicked].conversations[j].user!==currentUser){
                            nb++;
                        }
                    }if(nb===users[clicked].conversations.length){
                        var obj2={user:currentUser,discussion:[]}
                        obj2.discussion.push(obj)
                        users[clicked].conversations.push(obj2)
                    }
                }else if(users[clicked].conversations.length===0){
                    var obj2={user:currentUser,discussion:[]}
                    obj2.discussion.push(obj)
                    users[clicked].conversations.push(obj2)
                }
            })
            })
        }
}
