const sqlite3 = require('sqlite3').verbose();
let sql;
const db = new sqlite3.Database('login_data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

document.querySelector('#btnsub').addEventListener("click", () => {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    if(user === "" || user == null){
        document.getElementById('i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error1').style.color="red";
        document.getElementById('userspan').style.color="red";
    } else {
        document.getElementById('i1').style.background="";
        document.getElementById('i1').style.animation = "";
        document.getElementById('error1').style.color="";
        document.getElementById('userspan').style.color="";
    }
    if(pass === "" || pass == null){
        document.getElementById('i2').style.background="red";
        document.getElementById('i2').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error2').style.color="red";
        document.getElementById('passpan').style.color="red";
    } else {
        document.getElementById('i2').style.background="";
        document.getElementById('error2').style.color="";
        document.getElementById('i2').style.animation = "";
        document.getElementById('passpan').style.color="";
    }

    var name = db.each(`select username from  users`);
    for(var i = 0; i <= name.length; i++){
        console.log(name[i]);
    }

    var gotuser;
    var gotpass;

    db.each(`SELECT username as getuser FROM users`, function(err, row){
        gotuser = row.getuser;
        for(i=0; i <= gotuser.length; i++){
            if(user == gotuser){
                console.log(gotuser);
            }
        }
    })
    db.each(`SELECT password as getpass where username = '${gotuser}'`, function(err, row) {
        gotpass = row.getpass;
        if(pass == gotpass) {
            console.log('success');
        }
    })
    
})
