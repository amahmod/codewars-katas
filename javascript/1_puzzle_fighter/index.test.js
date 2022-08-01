
const  = require('.')

let test4 = [['BB','LLLL'],['BB','LL'],['BB','L'],['BB','LLL'],['BB','LL'],['BG','L'],['BB',''],['BB','R'],['RB','BBRRR'],['RR','LLL'],['RR','BALL'],['RR',''],['RR','R'],['RR','L'],['RR','B'],['RR','LLL'],['RR','LL'],['RR','BLLL'],['RR','B'],['YR','ALL'],['GR','AL'],['Rb','RRRR']];
let test1 = [['BR','LLL'],['BY','LL'],['BG','ALL'],['BY','BRR'],['RR','AR'],['GY','A'],['BB','AALLL'],['GR','A'],['RY','LL'],['GG','L'],['GY','BB'],['bR','ALLL'],['gy','AAL']];
let gameState1 = '      \n      \n      \n      \n      \n      \n      \n      \n      \n    R \n R  YR\nRR  RB';
let gameStateSequence1 = [
'      \n      \n      \n      \n      \n      \n      \n      \n      \n      \nB     \nR     ',
'      \n      \n      \n      \n      \n      \n      \n      \n      \n      \nBB    \nRY    ',
'      \n      \n      \n      \n      \n      \n      \n      \n      \n B    \nBB    \nRYG   ',
'      \n      \n      \n      \n      \n      \n      \n      \n      \n B    \nBB    \nRYG YB',
'      \n      \n      \n      \n      \n      \n      \n      \n      \n B    \nBB  RR\nRYG YB',
'      \n      \n      \n      \n      \n      \n      \n      \n      \n B  Y \nBB  RR\nRYGGYB',
'      \n      \n      \n      \n      \n      \n      \n      \nB     \nBB  Y \nBB  RR\nRYGGYB',
'      \n      \n      \n      \n      \n      \n      \n      \nB   R \nBB  Y \nBB GRR\nRYGGYB',
'      \n      \n      \n      \n      \n      \n      \n R    \nBY  R \nBB  Y \nBB GRR\nRYGGYB',
'      \n      \n      \n      \n      \n      \n      \n R    \nBY  R \nBBG Y \nBBGGRR\nRYGGYB',
'      \n      \n      \n      \n      \n      \n      \n R    \nBY YR \nBBGGY \nBBGGRR\nRYGGYB',

