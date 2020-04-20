var time=new Date()
var users={
    C20800:{name:'Wala Abdaoui', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'walaabdaoui', rights:'user', status:'Offline', conversations:[]
    },
    C20900:{name:'Houssem Guesmi', gender:'male', email:'houssemguesmi14@gmail.com', phone:56418566, dateOfBirth:'14/08/2000', password:'houssemguesmi', rights:'user', status:'Online', conversations:[{user:'C21400', discussion:[{sender:'C21400', message:'Hey Houssem!', date:time.getDate()},{sender:'C20900', message:'Hey Nouha!', date:time.getDate()}]}]
    },
    C21400:{name:'Nouha Chorfi', gender:'female', email:'nouhachorfi@gmail.com', phone:98870877, dateOfBirth:'10/04/1986', password:'nouhachorfi', rights:'user', status:'Offline', conversations:[{user:'C20900', discussion:[{sender:'C21400', message:'Hey Houssem!', date:time.getDate()},{sender:'C20900', message:'Hey Nouha!', date:time.getDate()}]}]
    },
    C22000:{name:'Ali Soudani', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'alisoudani', rights:'user', status:'Offline', conversations:[]
    },
    C21200:{name:'Siwar Hkimi', gender:'female', email:'cywarhkimi@gmail.com', phone:54267580, dateOfBirth:'25/08/1993', password:'siwarhkimi', rights:'user', status:'Online', conversations:[]
    },
    C20300:{name:'Amine Hassine', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'aminehassine', rights:'user', status:'Offline', conversations:[]
    },
    C20700:{name:'Firas Mrad', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'firasmrad', rights:'user', status:'Online', conversations:[]
    },
    C20200:{name:'Afif Rakrouki', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'afifrakrouki', rights:'user', status:'Online', conversations:[]
    },
    C20100:{name:'Ahmed Adeeb Abdulhadi', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'ahmedadeebabdulhadi', rights:'user', status:'Offline', conversations:[]
    },
    C21100:{name:'Taha Khelfa', gender:'male', email:'tahtoouh@gmail.com', phone:24546935, dateOfBirth:'05/05/1980', password:'tahakhelfa', rights:'user', status:'Online', conversations:[]
    },
    C20600:{name:'Belgacem Zabbes', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'belgacemzabbes', rights:'user', status:'Online', conversations:[]
    },
    C21600:{name:'Mohamed Yousri Mimouni', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'mohamedyousrimimouni', rights:'user', status:'Offline', conversations:[]
    },
    C20500:{name:'Aymen Yaich', gender:'male', email:'aymenyaiche@yahoo.fr', phone:44135148, dateOfBirth:'01/02/1983', password:'aymenyaich', rights:'user', status:'Offline', conversations:[]
    },
    C21700:{name:'Houssem Eddine Abdelli', gender:'male', email:'abdelli.hou@gmail.com', phone:29693572, dateOfBirth:'25/11/1986', password:'houssemeddineabdelli', rights:'user', status:'Online', conversations:[]
    },
    C21900:{name:'Moataz Djebali', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'moatazdjebali', rights:'user', status:'Offline', conversations:[]
    },
    C21500:{name:'Mohamed Zemzemi', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'mohamedzemzemi', rights:'user', status:'Online', conversations:[]
    },
    C21000:{name:'Mohamed Amin Ziadi', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'mohamedaminziadi', rights:'user', status:'Online', conversations:[]
    },
    C21800:{name:'Khaireddine Lachtar', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'khaireddinelachtar', rights:'user', status:'Offline', conversations:[]
    },
    C20400:{name:'Amir Ben Youssef', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'amirbenyoussef', rights:'user', status:'Offline', conversations:[]
    },
    C21300:{name:'Omar Yakoubi', gender:'male', email:'@gmail.com', phone:0000000, dateOfBirth:'DD/MM/YYYY', password:'omaryakoubi', rights:'user', status:'Online', conversations:[]
    },
    ADMIN:{ name:'ADMIN', password:"ADMIN", messages:[{C20800:[]},{C20900:["Hello Houssem, you did a good job today ;)", "Why you are late today ?"]},{C21400:["hello Nouha"]},{C22000:[""]},{C21200:[""]},{C20300:[""]}, {C20700:[""]},{C20200:[""]},{C20100:[""]},{C21100:[""]},{C20600:[""]},{C21600:[""]}, {C20500:[""]},{C21700:[""]},{C21900:[""]},{C21500:[""]},{C21000:[""]},{C21800:[""]},{C20400:[""]},{C21300:[""]}]},
}   

var room=[{user:'C20900', message:'Good Morning everyone', date:time.getTime()}, {user:'C21400', message:'Good Morning Nouha how are you?', date:time.getTime()},{user:'C20900', message:'Good Morning everyone', date:time.getTime()}, {user:'C21400', message:'Good Morning Nouha how are you?', date:time.getTime()},{user:'C20900', message:'Good Morning everyone', date:time.getTime()}, {user:'C21400', message:'Good Morning Nouha how are you?', date:time.getTime()},{user:'C20900', message:'Good Morning everyone', date:time.getTime()}, {user:'C21400', message:'Good Morning Nouha how are you?', date:time.getTime()},{user:'C20900', message:'Good Morning everyone', date:time.getTime()}, {user:'C21400', message:'Good Morning Nouha how are you?', date:time.getTime()},{user:'C20900', message:'Good Morning everyone', date:time.getTime()}, {user:'C21400', message:'Good Morning Nouha how are you?', date:time.getTime()},{user:'C20900', message:'Good Morning everyone', date:time.getTime()}, {user:'C21400', message:'Good Morning Nouha how are you?', date:time.getTime()},{user:'C20900', message:'Good Morning everyone', date:time.getTime()}, {user:'C21400', message:'Good Morning Nouha how are you?', date:time.getTime()}]

var absence={C20900:['absent','present','present','late','absent','present'],
            C21400:['present','late','absent','present','present','absent'],
            C22000:['absent','present','present','late','absent','present'],
            C21200:['present','late','absent','present','present','absent'],
            C20300:['absent','present','present','late','absent','present'],
            C20700:['present','late','absent','present','present','absent'],
            C20200:['absent','present','present','late','absent','present'],
            C20100:['present','late','absent','present','present','absent'],
            C21100:['absent','present','present','late','absent','present'],
            C20600:['present','late','absent','present','present','absent'],
            C20800:['absent','present','present','late','absent','present'],
            C21600:['present','late','absent','present','present','absent'],
            C20500:['absent','present','present','late','absent','present'],
            C21700:['present','late','absent','present','present','absent'],
            C21900:['absent','present','present','late','absent','present'],
            C21500:['present','late','absent','present','present','absent'],
            C21000:['absent','present','present','late','absent','present'],
            C21800:['present','late','absent','present','present','absent'],
            C20400:['absent','present','present','late','absent','present'],
}

var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var currentUser=''