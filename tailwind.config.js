/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      },
      screens: {
        'xxxs':{'min': '250px','max': '299px'},
        'xxs': {'min': '300px', 'max': '479px'},
        'xs': {'min': '480px', 'max': '575px'},
        'sm': {'min': '576px', 'max': '767px'}, 
        'md': {'min': '768px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1199px'},
        'xl': {'min': '1200px'},
        },
    },
  },
  plugins: [],
}
