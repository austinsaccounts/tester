import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import './romanNumerals.js';
import {backEnd} from './romanNumerals.js';
import $ from 'jquery';

$(document).ready(function() {
  $("#theForm").submit(function(event) {
    var currentValue = parseInt($("#number-input").val());
    console.log(currentValue);
    event.preventDefault();
    var answer = backEnd(currentValue);
    $(".answer").html("<h1>Your number:" + currentValue + "</h1>" + "<h1>Your Roman numeral:" + answer + "</h1>");
  });
});
