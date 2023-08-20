import React from 'react'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

import { Outlet } from 'react-router-dom'

import Modal from 'components/modal/Modal'
import { useSelector } from 'react-redux'


const MainLayout = () => {
  const { modals } = useSelector(state => state.modal)


  return (
    <>
      {modals.length > 0 && modals.map((modal, index) => {
        const { header, actions, closeButton, closeModal, text } = modal
        return (

          <Modal key={index}
            header={header}
            actions={actions}
            closeButton={closeButton}
            closeModal={closeModal}
            text={text}
          />
        )
      }
      )}
      <Header />

      <Outlet />

      <Footer />
    </>

  )
}



export default MainLayout