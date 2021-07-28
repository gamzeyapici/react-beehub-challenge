import {  sortAlphaNum, greaterAndEqual2010 } from '../utils';

const API_URL = '/data.json';

export const getData = async () => {
    let response = await fetch(API_URL);

    response = await response.json();

    return response;
}

// Condition is a filter function
export const getMovies = async (condition = greaterAndEqual2010, limit = 21) => {
    const response = await getData();

    return response.entries.filter(entry => entry.programType === "movie")
        .filter(condition)
        .slice(0, limit)
        .sort(sortAlphaNum);
}

export const getSeries = async (condition = greaterAndEqual2010, limit = 21) => {
    const response = await getData();

    return response.entries.filter(entry => entry.programType === "series")
        .filter(condition)
        .slice(0, limit)
        .sort(sortAlphaNum);
}