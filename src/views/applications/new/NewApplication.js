// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label, Input, FormText, Row, Col } from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import Flatpickr from 'react-flatpickr'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const sourceOptions = [
  { value: 'customer', label: 'Customer' },
  { value: 'internet', label: 'Internet' },
  { value: 'referral', label: 'Referral' },
  { value: 'walkIn', label: 'Walk-In' },
  { value: 'others', label: 'Others' }
]

const noOfLoanOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '>5' }
]

const docTypeOptions = [
  { value: '1', label: 'NRIC' },
  { value: '2', label: 'Passport' },
  { value: '3', label: 'FIN' },
  { value: '4', label: 'UEN' }
]

const genderOptions = [
  { value: 'm', label: 'Male' },
  { value: 'f', label: 'Female' }
]

const statusOptions = [
  { value: 1, label: 'Single' },
  { value: 2, label: 'Married' },
  { value: 3, label: 'Widowed' },
  { value: 4, label: 'Separated' },
  { value: 5, label: 'Divorced' }
]

const ownershipOptions = [
  { value: '1', label: 'Does not any property' },
  { value: '2', label: 'HDB 1-room' },
  { value: '3', label: 'HDB 2-room' },
  { value: '4', label: 'HDB 3-room' },
  { value: '5', label: 'HDB 4-room' }
]

const propertyOptions = [
  { value: '1', label: 'Stay with Spouse' },
  { value: '2', label: 'Stay with Parents' },
  { value: '3', label: 'Stay with Daughter' },
  { value: '4', label: 'Stay with Other Relatives' },
  { value: '5', label: 'Stay with Son' }
]

const bikOptions = [{ value: '1', label: 'bik' }]

const NewApplication = ({ data, handleChange, labels, countries, applicationDate, setApplicationDate, dob, setDob }) => {
  // ** State
  const [applicationDatePicker, setApplicationDatePicker] = useState(applicationDate ? new Date(applicationDate) : new Date())
  const [dobPicker, setDobPicker] = useState(dob ? new Date(dob) : new Date())

  const changeApplicationDatePicker = (date) => {
    setApplicationDatePicker(date)
    console.log('ApplicationDate', date)
    setApplicationDate(date[0].toISOString())
  }

  const changeDobPicker = (date) => {
    setDobPicker(date)
    console.log('dob', date)
    setDob(date[0].toISOString())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>New Application</CardTitle>
      </CardHeader>

      <CardBody>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Label
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              // defaultValue={labels[0]}
              options={labels}
              isClearable={false}
              value={labels.find(obj => obj.value === data.label_id)}
              onChange={val => handleChange('label_id', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Application Date
          </Label>
          <Col sm='9'>
            <Flatpickr
              value={applicationDatePicker}
              className='form-control'
              onChange={date => changeApplicationDatePicker(date)}
              options={{
                altInput: true,
                altFormat: 'F j, Y',
                dateFormat: 'Y-m-d'
              }}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Application Source <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={sourceOptions}
              isClearable
              value={sourceOptions.find(obj => obj.value === data.application_source)}
              onChange={val => handleChange('application_source', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Amount Requested <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Input type='number' placeholder='Amount' value={data.amount} onChange={e => handleChange('amount', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            No. of Loan w/ others
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={noOfLoanOptions}
              isClearable
              value={noOfLoanOptions.find(obj => obj.value === data.no_of_loan)}
              onChange={val => handleChange('no_of_loan', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Active Loan(s)
          </Label>
          <Col sm='9'>
            <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='' value={data.active_loan} onChange={e => handleChange('active_loan', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Doc. Type
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              options={docTypeOptions}
              isClearable={false}
              value={docTypeOptions.find(obj => obj.value === data.ictype)}
              onChange={val => handleChange('ictype', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Identity Doc. No. <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Identity Doc. No.' value={data.nric} onChange={e => handleChange('nric', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Name (in NRIC) <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Name' value={data.name} onChange={e => handleChange('name', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Date of Birth
          </Label>
          <Col sm='9'>
            <Flatpickr
              value={dobPicker}
              className='form-control'
              onChange={date => changeDobPicker(date)}
              options={{
                altInput: true,
                altFormat: 'F j, Y',
                dateFormat: 'Y-m-d'
              }}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Gender <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={genderOptions}
              isClearable
              value={genderOptions.find(obj => obj.value === data.gender)}
              onChange={val => handleChange('gender', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Marital Status <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={statusOptions}
              isClearable
              value={statusOptions.find(obj => obj.value === data.status)}
              onChange={val => handleChange('status', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Email <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Input type='email' placeholder='Email' value={data.email} onChange={e => handleChange('email', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Phone <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Input type='number' placeholder='Phone' value={data.phone} onChange={e => handleChange('phone', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Additional Phone
          </Label>
          <Col sm='9'>
            <Input type='number' placeholder='Additional Phone' value={data.additional_phone} onChange={e => handleChange('additional_phone', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Home Phone
          </Label>
          <Col sm='9'>
            <Input type='number' placeholder='Home Phone' value={data.home_phone} onChange={e => handleChange('home_phone', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Nationality <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={countries}
              isClearable
              value={countries.find(obj => obj.value === data.nationality)}
              onChange={val => handleChange('nationality', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Ownership of Property
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={ownershipOptions}
              isClearable
              value={ownershipOptions.find(obj => obj.value === data.ownership)}
              onChange={val => handleChange('ownership', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Property Type
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={propertyOptions}
              isClearable
              value={propertyOptions.find(obj => obj.value === data.property_type)}
              onChange={val => handleChange('property_type', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Residence Address <font color="red">*</font>
          </Label>
          <Col sm='9' style={{ paddingTop: 8 }}>
            <Input type='checkbox' id='basic-cb-checked' className='me-1' />
            <Label for='basic-cb-checked' className='me-1 form-check-label'>
              Non Singapore Address
            </Label>
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            
          </Label>
          <Col sm='3'>
            <Input type='text' placeholder='Postcode' value={data.postalcode} onChange={e => handleChange('postalcode', e.target.value)} />
          </Col>
          <Col sm='3'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={bikOptions[0]}
              options={bikOptions}
              isClearable={false}
            />
          </Col>
          <Col sm='3'>
            <Input type='text' placeholder='Unit' value={data.unit} onChange={e => handleChange('unit', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Street Name' value={data.streetname} onChange={e => handleChange('streetname', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='' value={data.buildingname} onChange={e => handleChange('buildingname', e.target.value)} />
          </Col>
        </Row>
        
      </CardBody>
    </Card>
  )
}
export default NewApplication
