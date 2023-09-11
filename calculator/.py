'''
script.py
'''
import os
# Get the result input element
const resultInput = document.getElementById('result');
# Function to append a number to the result
function appendNumber(number) {
    resultInput.value += number;
}
# Function to append an operator to the result
function appendOperator(operator) {
    resultInput.value += operator;
}
# Function to clear the result
function clearResult() {
    resultInput.value = '';
}
# Function to calculate the result
function calculate() {
    try:
        const expression = resultInput.value;
        const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
        const result = Function(`"use strict"; return (${sanitizedExpression})`)();
        resultInput.value = result;
    except Exception as e:
        resultInput.value = 'Error'