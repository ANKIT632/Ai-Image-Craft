import {logo} from './assets'
import { Home,CreatePost } from './page';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom' 

 const App = () => {
  return (
<BrowserRouter>
  <header className='w-full flex justify-between items-center bg-white sm:px-8 px-3 py-3 border-b border-b-[#e6ebf4]'>
<Link to='/'>
<div className='flex'>
  <img src={logo} alt='logo' className='w-8 object-contain'/>
  <p className='mt-1 font-bold '>i-craft</p>
</div>
</Link>

<Link to='/create-post' className='font-inter font-medium bg-[#0097ff] text-white px-3 py-1 rounded-md  hover:bg-[#007fff]'>
  Create
</Link>
  </header>

  <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create-post' element={<CreatePost/>}/>
 
     </Routes>
  </main>
</BrowserRouter>
  )
}


export default App;



