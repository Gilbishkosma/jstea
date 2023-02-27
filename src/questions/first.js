import { assert } from "chai";

const task = (`() => {
    /*  Return the expected output
        Expected Output = {
        "apple": 30,
        "mango": 16,
        "banana": 24
        }
        Description: Find the total price for each fruit.
    */
    const fruits = [
        {
            "fruit": "apple",
            "price": "12"
        },
        {
            "fruit": "apple",
            "price": "18"
        },
        {
            "fruit": "mango",
            "price": "4"
        },
        {
            "fruit": "banana",
            "price": "12"
        },
        {
            "fruit": "mango",
            "price": "8"
        },
        {
            "fruit": "banana",
            "price": "12"
        },
        {
            "fruit": "mango",
            "price": "8"
        }
    ]

    const findSumOfEachFruit = (arr) => {
        // your code goes here
        return {};
    }

    const output = findSumOfEachFruit(fruits)

    // manipulate the array here

    return output;
}`)

const expectedOutput = {
    "apple": 30,
    "mango": 16,
    "banana": 24
}

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