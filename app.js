const student_data = [
    {name : 'Abdur Rahim',
    clas : 'Five',
    roll : 12,
    age : 10,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 300,
    },
    {name : 'Abdul Karim',
    clas : 'Five',
    roll : 13,
    age : 10,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 300,
    },
    {name : 'Abdur Sattar',
    clas : 'Five',
    roll : 14,
    age : 10,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 300,
    },
    {name : 'Rakib',
    clas : 'Five',
    roll : 15,
    age : 11,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 300,
    },
    {name : 'Arif',
    clas : 'Six',
    roll : 16,
    age : 12,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 400,
    },
    {name : 'Sumon',
    clas : 'Six',
    roll : 17,
    age : 13,
    gender : 'Male',
    location : 'Rampura',
    admis_fee : 400,
    },
    {name : 'Sumi',
    clas : 'Six',
    roll : 12,
    age : 11,
    gender : 'Female',
    location : 'Badda',
    admis_fee : 400,
    },
    {name : 'Rumi',
    clas : 'Six',
    roll : 01,
    age : 11,
    gender : 'Female',
    location : 'Uttra',
    admis_fee : 400,
    },
    {name : 'Abdur Razzak',
    clas : 'Nine',
    roll : 01,
    age : 14,
    gender : 'Male',
    location : 'Uttra',
    admis_fee : 600,
    },
    {name : 'Mim',
    clas : 'Nine',
    roll : 02,
    age : 15,
    gender : 'Female',
    location : 'Saver',
    admis_fee : 600,
    },
    {name : 'Hasan',
    clas : 'Nine',
    roll : 03,
    age : 15,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 600,
    },
    {name : 'Jamal',
    clas : 'Eight',
    roll : 05,
    age : 13,
    gender : 'Male',
    location : 'Mirpur',
    admis_fee : 500,
    },
    {name : 'Kamal',
    clas : 'Eight',
    roll : 12,
    age : 14,
    gender : 'Male',
    location : 'Tongi',
    admis_fee : 500,
    },
    {name : 'Sufia',
    clas : 'Seven',
    roll : 09,
    age : 13,
    gender : 'Female',
    location : 'Saver',
    admis_fee : 450,
    },   
    {name : 'Saju',
    clas : 'Seven',
    roll : 01,
    age : 12,
    gender : 'Male',
    location : 'Mirpur',
    admis_fee : 450,
    },
    {name : 'Raja Mia',
    clas : 'Seven',
    roll : 05,
    age : 12,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 450,
    },
    {name : 'Ahmed',
    clas : 'Five',
    roll : 01,
    age : 10,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 300,
    },
    {name : 'Akash',
    clas : 'Five',
    roll : 02,
    age : 10,
    gender : 'Male',
    location : 'Mirpur',
    admis_fee : 300,
    },
    {name : 'Habib',
    clas : 'Five',
    roll : 04,
    age : 10,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 300,
    },
    {name : 'Asraful',
    clas : 'Five',
    roll : 06,
    age : 10,
    gender : 'Male',
    location : 'Mirpur',
    admis_fee : 300,
    },
    {name : 'Hasan',
    clas : 'Six',
    roll : 07,
    age : 11,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 400,
    },
    {name : 'Mahmud',
    clas : 'Six',
    roll : 08,
    age : 10,
    gender : 'Male',
    location : 'Badda',
    admis_fee : 400,
    },
    {name : 'Soriotullah',
    clas : 'Nine',
    roll : 01,
    age : 14,
    gender : 'Male',
    location : 'Uttra',
    admis_fee : 600,
    },
    {name : 'Abdullah',
    clas : 'Nine',
    roll : 02,
    age : 14,
    gender : 'Male',
    location : 'Mirpur',
    admis_fee : 600,
    },
    {name : 'Zahid',
    clas : 'Nine',
    roll : 10,
    age : 15,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 600,
    },
    {name : 'Sahin',
    clas : 'Nine',
    roll : 09,
    age : 14,
    gender : 'Male',
    location : 'Badda',
    admis_fee : 600,
    },
    {name : 'Aysha',
    clas : 'Nine',
    roll : 14,
    age : 14,
    gender : 'Female',
    location : 'Saver',
    admis_fee : 600,
    },
    {name : 'Jui',
    clas : 'Eight',
    roll : 15,
    age : 14,
    gender : 'Female',
    location : 'Saver',
    admis_fee : 500,
    },
    {name : 'Asma',
    clas : 'Eight',
    roll : 16,
    age : 13,
    gender : 'Female',
    location : 'Badda',
    admis_fee : 500,
    },
    {name : 'Milon',
    clas : 'Five',
    roll : 19,
    age : 10,
    gender : 'Male',
    location : 'Saver',
    admis_fee : 300,
    }
];

//Total Admnission fees
let total = 0;
for(data of student_data){
    console.log(`Student Name : ${data.name}----> Admission Fee : ${data.admis_fee}`);
    total += data.admis_fee
}
console.log(`Total Admission Fees : ${total}`);


//Find All Female Students
for(data of student_data){
    if(data.gender == 'Female'){
    console.log(`All Female Students List : ${data.name}`)}
}


//Find class wise student result
for( data of student_data){
    if(data.clas == 'Six'){
        console.log(`Class Six Students : ${data.name}`);
    }
}
for( data of student_data){
    if(data.clas == 'Seven'){
        console.log(`Class Seven Students : ${data.name}`);
    }
}
for( data of student_data){
    if(data.clas == 'Eight'){
        console.log(`Class Eight Students : ${data.name}`);
    }
}
for( data of student_data){
    if(data.clas == 'Nine'){
        console.log(`Class Nine Students : ${data.name}`);
    }
}


//Location wise student result
for(data of student_data){
    if(data.location == 'Mirpur'){
        console.log(`Mirpur ar Student's : ${data.name}`);
    }
}
for(data of student_data){
    if(data.location == 'Uttra'){
        console.log(`Uttra ar Student's : ${data.name}`);
    }
}for(data of student_data){
    if(data.location == 'Badda'){
        console.log(`Badda ar Student's : ${data.name}`);
    }
}
for(data of student_data){
    if(data.location == 'Saver'){
        console.log(`Savar ar Student's : ${data.name}`);
    }
}


//find student between 10 - 25 age
for(data of student_data){
    if(data.age >= 10, data.age<=25){
        console.log(`10 to 25 Years Old Students Name: ${data.name}`);
    }
}