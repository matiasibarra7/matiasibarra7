module.exports = {
  changeColors: (darkMode) => {
    if (darkMode) {
      document.documentElement.style.setProperty('--body-bg-color', '#1C2541')
      document.documentElement.style.setProperty('--main-bg-color', '#AFC0D4')
      document.documentElement.style.setProperty('--section-bg-color', '#D7E0EA')
      document.documentElement.style.setProperty('--card-bg-color', '#BCCBDC')
      document.documentElement.style.setProperty('--font-color', 'black')

      document.documentElement.style.setProperty('--light-icon', '#222830')
      return false
    } else {
      document.documentElement.style.setProperty('--body-bg-color', '#0B132B')


      /* document.documentElement.style.setProperty('--main-bg-color', '#182139')
      document.documentElement.style.setProperty('--section-bg-color', '#222830') 
      document.documentElement.style.setProperty('--card-bg-color', '#333C48') */
      
      // Google Colors
      document.documentElement.style.setProperty('--main-bg-color', '#202020')
      document.documentElement.style.setProperty('--section-bg-color', '#313236')

      document.documentElement.style.setProperty('--card-bg-color', '#44454B')
      document.documentElement.style.setProperty('--font-color', '#C8CBCF')
      
      document.documentElement.style.setProperty('--light-icon', '#333C48')


      return true
    }
  }   
}