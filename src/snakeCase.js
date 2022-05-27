function convert (str) {
    let n = str.length;
    let str1 = "";

    for ( i = 0; i < n; i++)
    {
     
        // Converting space
        // to underscore
        if (str[i] == ' ')
            str1 = str1 + '_';
        else

            // If not space, convert
            // into lower letacter
            str1 = str1 + (str[i]).toLowerCase();
    }

    console.log(str1);
    return str1
}

// Driver Code
let str = "Madrid to win UCL on Sunday";

// Calling function
const snakeCase = convert(str)

//document.getElementById("snakeCase").innerHTML = `<h4> ${snakeCase} </h4>`;