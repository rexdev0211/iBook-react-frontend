// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Icons Imports
import * as Icons from 'react-feather'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import Avatar from '@components/avatar'

import update from 'immutability-helper'

// ** Demo Components
import NewApplication from './NewApplication'
import EmploymentDetail from './EmploymentDetail'

const labelOptions = [
  { value: 1, label: 'Normal' },
  { value: 2, label: 'Promotion - [Promo]' },
  { value: 3, label: 'Online Review - [R]' },
  { value: 4, label: 'Survey - [S]' },
  { value: 5, label: 'Online Review + Survey - [R+S]' }
]

const nationalityOptions = [
  { value: '1', label: 'SINGAPORE' },
  { value: '2', label: 'Singapore Citizen' },
  { value: '3', label: 'ARUBA' },
  { value: '4', label: 'AFGHANISTAN' },
  { value: '5', label: 'ANGOLA' }
]

const defaultData = {
  company: "",
  application_date: "",
  amount: 0,
  no_of_loan: "",
  active_loan: "",
  name: "",
  ictype: "",
  ictype_detail: "",
  ictype_remark: "",
  nric: "",
  dob: "",
  nationality: "",
  gender: "",
  martial: "",
  email: "",
  phone: "",
  additional_phone: "",
  home_phone: "",
  ownership: "",
  property_type: "",
  is_oversea: 0,
  postalcode: "",
  buildingnumber: "",
  unit: "",
  buildingname: "",
  streetname: "",
  address: "",
  country: "",
  company_name: "",
  company_reg_no: "",
  company_address: "",
  company_unit: "",
  company_buildingnumber: "",
  company_buildingname: "",
  company_streetname: "",
  company_postalcode: "",
  company_phone: "",
  position: "",
  job_period: "",
  salary_date: "",
  monthly_salary: 0,
  annual_income: 0,
  nok_name: "",
  relationship: "",
  nok_phone: "",
  nok_name_2: "",
  relationship_2: "",
  nok_phone_2: "",
  application_source: "",
  source_remark: "",
  status: 0,
  reject_reason: "",
  reject_remark: "",
  hidden: 0,
  loanno: "",
  branch: "",
  label_id: 0,
  remark: "",
  singpass_json: "",
  createdate: "2022-07-13T13:04:45.082Z",
  createdby: "",
  updatedate: "2022-07-13T13:04:45.082Z",
  updatedby: "",
  loanid: "",
  loan_id: 0
}

const ApplicationNewManual = () => {

  const [data, setData] = useState(defaultData)
  const [applicationDate, setApplicationDate] = useState('')
  const [dob, setDob] = useState('')
  const [salaryDate, setSalaryDate] = useState('')
  // const [labels, setLabels] = useState(labelOptions)
  // const [countries, setCountries] = useState([])
  const [branches, setBranches] = useState([])

  useEffect(() => {
    // axios.get(`/application/get_label_list`)
    //   .then(response => setLabels(response.data.map(label => ({ value: label.id, label: label.name }))))
    //   .catch(err => console.log(err))
    
    // axios.get(`/application/get_country`)
    //   .then(response => setCountries(response.data))
    //   .catch(err => console.log(err))
    
    axios.get(`/application/get_branches`)
      .then(response => setBranches(response.data))
      .catch(err => console.log(err))
  }, [])

  const handleChange = (type, value) => {
    console.log('type', type)
    console.log('value', value)
    setData(update(data, {[type]: {$set: value}}))
    // setData({ ...data, [type]: value})
  }

  const handleSubmit = () => {
    console.log('handleSubmit', data)
    axios.post('/application', data).then(response => {
      console.log('addApplicationResponse', response)
      toast(() => (
        <div className='d-flex'>
          <div className='me-1'>
            <Avatar size='sm' color='success' icon={<Icons.Check size={12} />} />
          </div>
          <div className='d-flex flex-column'>
            <h6 className='toast-title'>New application added! 📋</h6>
          </div>
        </div>
      ))
    }).catch(err => console.log('error', err))
  }

  return (
    <Fragment>
      <Breadcrumbs title='New Application' data={[{ title: 'Application' }, { title: 'New' }]} />
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <NewApplication 
            data={data} 
            handleChange={handleChange}
            labels={labelOptions} 
            countries={nationalityOptions} 
            branches={branches} 
            applicationDate={applicationDate}
            setApplicationDate={setApplicationDate} 
            dob={dob}
            setDob={setDob}
          />
        </Col>
        <Col md='6' sm='12'>
          <EmploymentDetail 
            data={data} 
            handleChange={handleChange} 
            salaryDate={salaryDate}
            setSalaryDate={setSalaryDate} 
            handleSubmit={handleSubmit} 
          />
        </Col>
      </Row>
    </Fragment>
  )
}
export default ApplicationNewManual
