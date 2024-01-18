import React, { useEffect } from 'react'
import Modal from './Modal';

const CardGitHub = (props) => {
  const { avatar_url, login, html_url } = props;
  const [Modal, setModal] = useState(false)
  
  

  useEffect(() => {
    function handleModal() {
      const contenedor = document.getElementsByTagName("div");
      document.removeChild(contenedor);
      return (
        <Modal/>
      )
    }
    handleModal()
    return () => {
      
    }
  }, [])
  
  
  return (
    <div className='bg-gray-200 p-4 rounded-lg shadow-md sm:min-w-[200px]'>
        <img onClick={setModal(true)} src={avatar_url} alt="" className='w-16 h-16 rounded-full mb-4 mx-auto cursor-pointer' />
        <p className='text-2xl font-bold'>
            {login}
        </p>
        <p className='text-xl text-blue-500'>
            {html_url}
        </p>
    </div>
  )
}

export default CardGitHub