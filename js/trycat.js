try{
    "use strict"
    var x = 5;
    var y = 3;
    var z = x + y;
    document.write(`${x} + ${y} = ${z}`);
}
catch(err){
    document.write(err);
    throw("You can not do that");
}

finally{
    document.writeln("document error");
}