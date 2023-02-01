import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageChat from '../assets/images/picture-chat.png'
import SendVektor from '../assets/images/Send-Vektor.png'

import { useSelector } from 'react-redux'
import jwt from 'jwt-decode'
import { useEffect, useState } from 'react'
import axiosHelper from '../helpers/axios.helper.'

const Chat = () => {
  const token = useSelector(state => state.auth.token)
  const decode = token && jwt(token)
  const id = decode?.id

  const [conversation, setConversation] = useState([])

  useEffect(() => {
    const getConversation = async () => {
      try {
        const { data } = await axiosHelper.get(`/message/conversation/${id}`)
        setConversation(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getConversation()
  }, [id])

  return (
    <>
      <Navbar />
      <div className='px-2 sm:px-20 py-6 bg-[#E5E5E5]'>
        <div className='flex max-[768px]:flex-col'>
          <div className='w-1/3 bg-white rounded-md mr-10 h-[75vh] max-[768px]:w-full max-[768px]:mb-6'>
            <h3 className='font-semibold leading-6 bold text-base	p-5'>Chat</h3>
            <div className='border-1 border border-[#E2E5ED]'></div>
            <div className='h-full'>
              {conversation?.map(receiver => (
                <div className='flex items-center px-3 py-5' key={receiver.id}>
                  <img
                    src={
                      receiver.picture || require('../assets/images/user.png')
                    }
                    alt='profile-chat'
                    className='h-10 w-10 rounded-full'
                  />
                  <div className='px-5'>
                    <h3 className='font-semibold	text-base	leading-6'>
                      {receiver.fullName}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-2/3 bg-white rounded-md max-[768px]:w-full'>
            <div className='flex flex-col justify-between h-full'>
              <div>
                <div className='flex items-center px-3 py-2.5'>
                  <img
                    src={ImageChat}
                    alt='profile-chat'
                    className='h-10 w-10 rounded-full'
                  />
                  <div className='px-5'>
                    <h3 className='font-semibold	text-base	leading-6'>
                      Jonas adam
                    </h3>
                  </div>
                </div>
                <div className='border-1 border border-[#E2E5ED]'></div>
              </div>
              <form className='p-2.5 flex'>
                <input
                  placeholder='type message...'
                  className='border-1 border border-[#E2E5ED] p-3 rounded-2xl flex-1'
                ></input>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary ml-4'>
                  <img src={SendVektor} alt='Send' className='grow-0' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Chat
