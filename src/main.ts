import './style.css'


function main(){
  const cookiesWrapper = document.querySelector('.cookies-wrapper')

  console.log(cookiesWrapper)

  if(!cookiesWrapper) return

  setTimeout(():void=> {
    cookiesWrapper.classList.add('visible')
  }, 2000)
}

document.addEventListener('DOMContentLoaded', main)
