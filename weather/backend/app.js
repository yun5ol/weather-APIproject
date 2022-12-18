/*const express = require('express');
const app = express();
const port = 3000;

const request = require('request');

app.get('/proxy', (req, res) => {      

  res.set('Access-Control-Allow-Origin', '*'); 
  res.set('Content-Type', 'application/json; charset=UTF-8');  

  const nx = req.query.nx;
  const ny = req.query.ny;

  let today = new Date();
  today.setHours(today.getHours() + 9);

  let dd = today.getDate() - 1; 
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (minutes < 30) {
    
    hours = hours - 1;
    if (hours < 0) {
  
      today.setDate(today.getDate() - 1);
      dd = today.getDate();
      mm = today.getMonth() + 1;
      yyyy = today.getFullYear();
      hours = 23;
    };
  };
  if (hours < 10) {
    hours = '0' + hours;
  };
  if (mm < 10) {
    mm = '0' + mm;
  };
  if (dd < 10) {
    dd = '0' + dd;
  };

  const base_date = yyyy + '' + mm + '' + dd;
  const base_time = hours + '00';

  let openApiUri = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?" +
    "serviceKey=bpohWNihq8xBNkoV8mq5zVE%2BD4AxkoP2oiKGo16iEvTzG9%2F%2F97gkzjjpAcCubhbV4BZl6c%2FFZu%2FjjihDGVafUA%3D%3D" +
    "&pageNo=1" +
    "&numOfRows=1000" +
    "&dataType=JSON" +
    "&base_date=" + req.query.base_date + // 파라미터로 값을 받겠다
    "&base_time=0500" +
    "&nx=" + req.query.nx +
    "&ny=" + req.query.ny;

    console.log(openApiUri);


  request.get({
    uri: openApiUri
  }, (error, response, body) => {
    res.send(body);
  });
});*/

/*    console.log(today);
    console.log(base_date);
    console.log(base_time);
    console.log(today.getDate() - 1);
    console.log(dd);
*/