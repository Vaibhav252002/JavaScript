//object literal 
const mySym = Symbol("key1");
const JsUser = {
    name : "vaibhav",
    "school_name" : "MMCOE, pune",
    [mySym]:"mykey1",
    age : 23,
    location : "pune",
    email : "vaibhavrjondhale@gmail.com"
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.school_name);
console.log(JsUser.mySym);