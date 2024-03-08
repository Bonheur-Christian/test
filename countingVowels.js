function countVowels(sentence){
  let count = 0 ;
  let vowels = ['a','e','i','u','o'];
  let splitted = sentence.split('');
 for(let i = 0 ;i < splitted.length ; i++){
  for(let j = 0 ; j < vowels.length ; j++){
    if(splitted[i] === vowels[j]) count++
  }
 }

  return count;
}

  const country = 'Netherland';

  console.log(countVowels(country));//hello mr jovin uhsgcbvjdhknfgbvys