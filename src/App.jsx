import {useState} from 'react'
//importar db (credenciales de firebase)
import db from './firestore'
import { QuerySnapshot } from '@firebase/firestore'

function App() {
  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')
  const [dataUser, setDataUser] = useState({
    fullname:'',
    username:'',
    password:''
  })

  const handleChange = (e) => {
    e.preventDefault();
    setDataUser({...dataUser, [e.target.name]: e.target.value});
  }

const onSave = (e) => {
  e.preventDefault();
  db.collection('users').add({
    fullname: dataUser.fullname,
    username: dataUser.username,
    password: dataUser.password
  })
  setMessage('Usuario ingresado correctamente');
  setTimeout(()=>{
    setIsError(false)
    setMessage('')
  },2000)
  setDataUser({
    fullname:'',
    username:'',
    password:''
  })
}

const onSearch = (e)=>{
  e.preventDefault();
  db.collection('users')
  .where('username', '==', dataUser.username)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc)=>{
      console.log(doc.data())
      setDataUser({
        fullname: doc.data().fullname,
        username: doc.data().username,
      })
    })
  })
}

  return (
    <div className="container">
      <h1 className="title" style={{marginTop:10, textAlign:'center'}}>Actualización de Usuarios con Firebase - Firestore</h1>
      <form>
        <div className="row">
          <div className="col">
            <label>Full Name</label>
            <input 
              type="text"
              placeholder='fullname'
              id="fullname"
              name="fullname"
              className="form-control"
              onChange={handleChange}
              value={dataUser.fullname}
              />
          </div>
          <div className="col">
            <label>Username</label>
            <input 
              type="text"
              placeholder='Username'
              id="username"
              name="username"
              className="form-control"
              onChange={handleChange}
              value={dataUser.username}
              />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Contraseña</label>
            <input 
              type="password"
              placeholder='Password'
              id="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              value={dataUser.password}
              />
          </div>
          <div className="col"></div>
        </div>
        <div style={{color: isError ? 'red': 'green'}}>{message}</div>
        <button className="btn btn-success" style={{marginTop:10}} onClick={onSave}>Add</button>
        <button className="btn btn-dark" style={{marginTop:10, marginLeft:10}} onClick={onSearch}>Search</button>
        <button className="btn btn-warning" style={{marginTop:10, marginLeft:10}}>Update</button>
        <button className="btn btn-danger" style={{marginTop:10, marginLeft:10}}>Delete</button>
      </form>
    </div>
  );
}

export default App;
