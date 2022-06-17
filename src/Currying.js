const obj = {
	name: '',
	age: 7,
	addressLine: {
		line1: '',
		line2: '',
		abc: {
			str: 'string'
}	
}
}



const {age: {}}= obj;
//console.log(ag);


const arrs = [1,2,4,6,7,9,2,3,5,6,8,9,1,20,30,12,4];

const maxValue = function(arr){
    let maxValue = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxValue){
            maxValue = arr[i];
        }
    }
    return maxValue;
}

//console.log(maxValue(arrs));

const removeDuplicate = function (arr){
    let unique = [];
    arr.forEach((element)=>{
        if(!unique.includes(element)){
            unique.push(element);
        }
    });

    return unique;
}
//console.log(arrs.length)

//console.log(removeDuplicate(arrs));

const strs = 'string';

const reverse = function (str){
    let newStr = '';
    for(let i = str.length-1; i>=0;i--){
        newStr += str[i];
    } 
    return newStr;
}

//console.log(reverse(strs));

const fizzbuzz = function (n){
    const answer = [];
    
    for(let i=1; i<=n; i++){
        if(i%3==0 && i%5==0) answer.push('fizzbuzz');
        else if(i%3==0) answer.push('fizz')
        else if(i%5==0) answer.push('buzz')
        else answer.push(i.toString()); 
    }

    return answer
}

console.log(fizzbuzz(15))