var cron = require('node-cron');
const express=require('express');
const app= express();


let task=cron.schedule('1-50 * * * * *', () => {
   
    console.log('Running a job in every 2sec');
   });

 