import Config from 'react-native-config';

export function doFetch(method, path, data, cb){
  let payload = {
    method: method,
  
  }
  if(method != 'GET'){
    var form_data = new FormData();

    for ( var key in data ) {
      form_data.append(key, data[key]);
    }
    payload.body = form_data;
  }
  console.log("APIHostURL:: ","http://mydesichef.com/ticketingsoft_development/mobile_logins"+path);
  return fetch("http://mydesichef.com/ticketingsoft_development/mobile_logins"+path, payload)
    .then(
      (response) => response.json()
    )
    .then((res) => {
      return cb(null, res)
    })
    .catch( (error) => {
      cb(error, null)
    })
}

const Fetch = {doFetch: doFetch}
export default Fetch 
