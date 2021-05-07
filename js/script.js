// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Area-and-Perimeter

"use strict"

function enterClicked() {
  // This function get Length and Width and calculate and show it back

  //input
  const length = parseInt(document.getElementById("length").value)
  const width = parseInt(document.getElementById("width").value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  //output
  document.getElementById('area').innerHTML = 'Area is: ' + length + ' x ' + width + ' = ' + area + ' or ' + area + ' cm².'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + '2 x (' + length + '+' + width + ') = ' + perimeter + ' or ' + perimeter + ' cm.'
}