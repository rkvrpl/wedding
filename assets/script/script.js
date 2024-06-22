"use strict"

//прячущийся headet
let lastScroll = 0
const defaultOffset = 200
const header = document.querySelector('.header')
const scrollPosition = () => window.scrollY
const containHide = () => header.classList.contains('hide')
window.addEventListener('scroll', () =>{
	if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset){
		header.classList.add('hide')
		console.log('down')
	}
	else if(scrollPosition() < lastScroll && containHide()){
		header.classList.remove('hide')
		console.log('up')
	}
	lastScroll = scrollPosition()
})
// таймер 
function getNoun(number, one, two, five) {
	let n = Math.abs(number)
	n %= 100;
	if (n >= 5 && n <= 20) {
		return five
	}
	n %= 10;
	if (n === 1) {
		return one
	}
	if (n >= 2 && n <= 4) {
		return two
	}
	return five
}
function timer() {
    let currentDate = new Date()
    let deadline = new Date(2024, 7, 9)
    const result = (deadline - currentDate)+1000
    if (result < 0) {
        const el = document.querySelector('.timer__container')
        el.innerHTML = `<div class='today'>Сегодня!</div>`
        return undefined
    }
    let seconds = Math.floor((result/1000)%60)
    let minutes = Math.floor((result/1000/60)%60)
    let hours = Math.floor((result/1000/60/60)%24)
    let days = Math.floor(result/1000/60/60/24)
    if (seconds < 10) seconds = '0' + seconds
    if (minutes < 10) minutes = '0' + minutes
    if (hours < 10) hours = '0' + hours
	document.querySelector('.seconds').textContent = seconds
	document.querySelector('.minutes').textContent = minutes
	document.querySelector('.hours').textContent = hours
	document.querySelector('.days').textContent = days
	document.querySelector('.timer__days').textContent = getNoun(days, 'День', 'Дня', 'Дней')
	document.querySelector('.timer__hours').textContent = getNoun(hours, 'Час', 'Часа', 'Часов')
	document.querySelector('.timer__minutes').textContent = getNoun(minutes, 'Минута', 'Минуты', 'Минут')
	document.querySelector('.timer__seconds').textContent = getNoun(seconds, 'Секунда', 'Секунды', 'Секунд')
	setTimeout(timer, 1000)
}
window.onload = function() {
    timer()
}
