import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  TrippianSignup as appConfig
}
from '../../config/appConfig'
import {
  JumbotronShortWidget, TrippianPostFormWidget
}
from '../../components/index'
import {
  putTrippian
}
from '../../redux/apiIndex'
import store from '../../redux/store'
import {
  Login
}
from '../index'

export default class TrippianSignup extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(data) {
    log.info('posting data from form, submitting?', data, this.props.isFormSubmitted, this.props.isFormSubmitting)
    store.dispatch(putTrippian(data))
  }
  handleReset() {
    log.info('will handle form reset')
  }
  render() {
    const isAuthed = store.getState().appState.get('user').isAuthed
    log.info('--inside TrippianSignup render', isAuthed)
    return (
      <div id="trippian-sign-up-page">
        <JumbotronShortWidget title={appConfig.title} subTitle={appConfig.subTitle} />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
              {isAuthed && 
                <div className="section">
                    <div className="section-header">
                        <h3>{appConfig.formTitle}</h3>
                    </div>
                    <div className="section-body">
                      <TrippianPostFormWidget onSubmit={this.handleSubmit.bind(this)} resetForm={this.handleReset.bind(this)} />
                    </div>
                </div>
                }
                {!isAuthed && <Login />}

            </div>
        </div>
      </div>
    )
  }
}
TrippianSignup.propTypes = {
  name: PropTypes.string
}

TrippianSignup.displayName = 'TrippianSignup Page'
