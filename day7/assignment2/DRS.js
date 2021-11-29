//destrucring of object
const student={
    sname:"suraj",
    weight:50,
    height:5
};
console.log(`${student.weight} ${student.height}`);

//default
const{sname="hi"}=student;
console.log(sname);

//alias
const{sname:firstName}=student;
console.log(firstName);

//spread
const one={
    ename:"virat",
    age:40
};
const two={
    weight:40,
    height:5.1
};
const three={...one,...two};
console.log(three);

//rest
const a={
    fname:"raju",
    lname:"k",
    aweight:45,
};
const{fname,...rest}=a;
console.log(rest);
console.log(rest.aweight)