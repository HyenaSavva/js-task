let word = prompt('What is your name ?')

if(!word){
    alert('Nice Name')
}else {
    alert(`Hello ${word} `)
}

word = prompt('Are you familiar with javascript ?')

if(word === 'yes' || word === 'Yes'){
    alert('Nice')
}else {
    alert(`Okay than you can start `)
}