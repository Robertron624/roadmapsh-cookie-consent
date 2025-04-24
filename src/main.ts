import './style.css'


function main(){
  let savedConsent = localStorage.getItem('cookie-consent')
  if(savedConsent === 'true') return
    

  let consent = false

  const cookiesWrapper = document.querySelector('.cookies-wrapper')
  const closeButton = document.querySelector('.cookies-wrapper .close')
  const acceptButton = document.querySelector('.cookies-wrapper .accept')
  
  if(!cookiesWrapper) return

  closeButton?.addEventListener('click', () => {
    cookiesWrapper.classList.remove('visible')
    // localStorage.setItem('cookie-consent', 'false')
  })
  acceptButton?.addEventListener('click', () => {
    cookiesWrapper.classList.remove('visible')
    // localStorage.setItem('cookie-consent', 'true')
    consent = true
    console.log('consent -> ', consent ? 'You have accepted cookies' : 'You have rejected cookies')
  })
  // Show the cookies wrapper after 2 seconds
  // if the user has not already accepted or rejected cookies

  setTimeout(():void=> {
    cookiesWrapper.classList.add('visible')
  }, 2000)
}

document.addEventListener('DOMContentLoaded', main)
