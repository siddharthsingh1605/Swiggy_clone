import {userRouterError} from  "../errors/router-error";

const Error = () =>{

  const err = userRouterError()
  console.log(err)

  return (
    <div>
      <h1>OOOOOOOOOOOOOOOOOOOPS!!!!!!!!!!!!</h1>
    </div>
  )
}

export default Error;