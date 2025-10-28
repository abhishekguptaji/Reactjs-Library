import {useState, useEffect} from 'react'


function Github(){
  const [data,setData] = useState([])
  useEffect(() =>{
    fetch('http://api.github.com/users/abhishekguptaji')
    .then(response =>response.json())
    .then(data=>{
      console.log(data);
      setData(data)

    })
  })
  return (
    <>
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers:{data.followers}</div>
    <img src={data.avatar_url}></img>
    </>
  )
}

export default Github;