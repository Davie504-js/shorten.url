const fetch = require('node-fetch')
export default async (url) => {
  if(!url) throw Error('Please enter URL')
  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  if (!url.match(regex)) throw Error('Invalid URL format.')
  let res = await fetch(`https://api.codestation.xyz/api/utils/short?url=${url}.com`, { "method": "GET" }); 
  let json = await res.json();
  return json.short
}