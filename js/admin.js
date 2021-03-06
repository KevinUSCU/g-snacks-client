let snackTab = document.querySelector('.snack-tab')
let userTab = document.querySelector('.user-tab')
let adminTable = document.querySelector('.admin-table')
let adminTableHeader = document.querySelector('.admin-table-header')


/////ADMIN TABS - toggle view and style
snackTab.addEventListener('click', (e) => {
  if(!snackTab.classList.contains('active-tab')){
    snackTab.classList.add('active-tab')
    addSnackButton.classList.remove('hide')
    userTab.classList.remove('active-tab')
  }
  loadAdminSnacks(snacksURL)
})

userTab.addEventListener('click', (e) => {
  if(!userTab.classList.contains('active-tab')){
    userTab.classList.add('active-tab')
    addSnackButton.classList.add('hide')
    snackTab.classList.remove('active-tab')
  }
  loadAdminUsers(usersURL)
})
