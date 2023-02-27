import { assert } from "chai";

const task = `() => {

    /*
    Given a string s and an array of words arr,
    write a function that finds the word in arr 
    that is the longest substring of s 
    without repeating characters.

    Expected output = "cdef"
    */
    // 
    const s = "abcdefg";
    const arr = ["bc", "cdef", "defgh", "fghi", "ghij"];


    const findLongestSubstring = (s, arr) => {
        // your code goes here
        return "";
    }

    const output = findLongestSubstring(s, arr);

    // manipulate the array here

    return output;
}`

const expectedOutput = "cdef"

const checkExpectedOutput = (userOutput) => {
    try {
        assert.deepEqual(userOutput, expectedOutput)
        return true;
    } catch (error) {
        return false
    }
}

const question = { task, expectedOutput, checkExpectedOutput }

export default question;