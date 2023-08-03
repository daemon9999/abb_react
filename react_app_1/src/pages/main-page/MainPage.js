import React from 'react';
import Button from 'components/button/Button';
import Modal from 'components/modal/Modal';
import styles from './MainPage.module.scss';

class MainPage extends React.Component {
  state = {
    firstModalOpen: false,
    secondModalOpen: false,
  };

  toggleModal = (modal) => {
    this.setState(modal === 'first' ? { firstModalOpen: !this.state.firstModalOpen } : modal === 'second' ? { secondModalOpen: !this.state.secondModalOpen } : '')
  }

  render() {
    return (
      <div className={styles.main}>
        <Button
          backgroundColor="red"
          text="Open first modal"
          onClick={() => this.toggleModal('first')}
        />

        <Button
          backgroundColor="green"
          text="Open second modal"
          onClick={() => this.toggleModal('second')}
        />

      
   
        {this.state.firstModalOpen && (
          <Modal
            header="Do you want to delete this file?"
            closeButton={true}
            text={`Once you delete this file,   it won't be possible to undo this action.
             Are you sure you want to delete it?`}
            closeModal={() => this.toggleModal('first')}
            actions={<>
              <button  onClick={() => this.toggleModal('first')}>Ok</button>
              <button  onClick={() => this.toggleModal('first')}>Cancel</button>
            </>
            } />)}

        {this.state.secondModalOpen && (
          <Modal
            header="Do you want to convert into public repository?"
            closeButton={true}
            text="As soon as you convert into public repo, this repo will be 
            visible for all of members. Do you want to convert?"
            closeModal={() => this.toggleModal('second')}
            actions={<>

              <button onClick={() => this.toggleModal('second')}>Convert</button>
              <button onClick={() => this.toggleModal('second')}>Left as private</button>
            </>
            }

          />
        )}
      </div>
    );
  }
}

export default MainPage;