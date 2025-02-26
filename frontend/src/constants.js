
const API_URL = process.env.NODE_ENV != 'development' ?
    process.env.REACT_APP_BASE_URL :
    'https://backend-fyq5htfc4-suleman-balochs-projects.vercel.app'

console.log(process.env, "API_URL");

export default API_URL;