const sym = Symbol("key1")

let login = {
    user : "root",
    pass : "password",
    number:9824233422,
    name : "alpha",
    islogin : "yes",
    [sym] : "iskey1"
}

console.log(login);

console.log(login["user"]);
console.log(login["number"]);
console.log(login["name"]);
console.log(login["islogin"]);

console.log(login[sym]);

console.log(login);

login.user ="ankit";
Object.freeze(login);//after applying freeze keyword we can ' t edit the variable
login.user ="ranjan";

console.log(login);
