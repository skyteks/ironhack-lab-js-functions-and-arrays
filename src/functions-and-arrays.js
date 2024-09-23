// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2)
{
    return Math.max(num1, num2);
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array)
{
    if(array.length == 0)
    {
        return null;
    }
    let longestIndex;
    let longestCount = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i].length > longestCount)
        {
            longestIndex = i;
            longestCount = array[i].length;    
        }
    }
    return array[longestIndex];
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array)
{
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array)
{
    if(array.length == 0)
    {
        return 0;
    }
    const sum = sumNumbers(array);
    return sum / array.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word)
{
    if(array.length == 0)
    {
        return null;
    }
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] == word)
        {
            return true;
        }
    }
    return false;
}
