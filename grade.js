function calculateGrade(array){
    var sum = 0;
    var average;
    for(let i=0; i<array.length ; i++){
    sum+=array[i];        
    }
    average=Math.floor(sum/array.length);
    console .log(average);

    if(average>=1 && average<=59)
    console.log('Grade F')
    else if (average>59 && average <= 69) console.log('Grade D');
    else if (average>69 && average <= 79) console.log('Grade C');
    else if (average>79 && average <= 89) console.log('Grade B');
    else if (average>89 && average <=100) console.log('Grade A');
}

const marks = [23,78,78,90];
calculateGrade(marks);