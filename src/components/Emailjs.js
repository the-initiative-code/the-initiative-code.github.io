import * as emailjs from 'emailjs-com'

// email template ID
import { templateID } from '../utils/serviceID'

// account IDs
// panzerstadt
import { panzerstadtID, mayojichID } from '../utils/serviceID'
// majojich

const template_params = {
  user_name: 'user_name_value',
  user_email: 'user_email_value',
  product: 'product_value',
  target_audience: 'target_audience_value',
  description: 'description_value',
}

export const sendEmail = ({ data, user = 'panzerstadt' }) => {
  const users = {
    panzerstadt: {
      serviceID: panzerstadtID.service_id,
      userID: panzerstadtID.user_id,
    },
    mayojich: {
      serviceID: mayojichID.service_id,
      userID: mayojichID.user_id,
    },
  }

  const template =
    user === 'panzerstadt'
      ? templateID.template_id_panzerstadt
      : templateID.template_id_mayojich

  emailjs
    .send('default_service', template, data, users.panzerstadt.userID)
    .then(
      response => {
        console.log('SUCCESS!', response.status, response.text)
        return true
      },
      err => {
        console.log('FAILED...', err)
        return false
      }
    )
}
