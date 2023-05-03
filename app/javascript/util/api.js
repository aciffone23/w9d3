const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    'X-CSRF-Token': csrfToken,
    'Accept': 'application/JSON',
    ...options.headers
  };
  
  // const res = response.json();
  // return res;
  return await fetch(url, options);
}

export function followUser(id) {
  return customFetch( `/users/${id}/follow`,{
    method: "POST",
    
  })
}

export function unfollowUser(id) {
  return customFetch( `/users/${id}/follow`,{
    method: "DELETE",

  })
}


