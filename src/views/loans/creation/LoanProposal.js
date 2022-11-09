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

// const sourceOptions = [
//   { value: 'customer', label: 'Customer' },
//   { value: 'internet', label: 'Internet' },
//   { value: 'referral', label: 'Referral' },
//   { value: 'walkIn', label: 'Walk-In' },
//   { value: 'others', label: 'Others' }
// ]

// const noOfLoanOptions = [
//   { value: '1', label: '1' },
//   { value: '2', label: '2' },
//   { value: '3', label: '3' },
//   { value: '4', label: '4' },
//   { value: '5', label: '>5' }
// ]

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

const ownershipOptions = [
  { value: '1', label: 'Does not any property' },
  { value: '2', label: 'HDB 1-room' },
  { value: '3', label: 'HDB 2-room' },
  { value: '4', label: 'HDB 3-room' },
  { value: '5', label: 'HDB 4-room' }
]

const bikOptions = [{ value: '1', label: 'bik' }]

const LoanProposal = ({ data, handleChange, countries, dob, setDob, loanDate, setLoanDate, repayDate, setRepayDate }) => {
  // ** State
  const [dobPicker, setDobPicker] = useState(dob ? new Date(dob) : new Date())
  const [loanDatePicker, setLoanDatePicker] = useState(loanDate ? new Date(loanDate) : new Date())
  const [repayDatePicker, setRepayDatePicker] = useState(repayDate ? new Date(repayDate) : new Date())

  const changeDobPicker = (date) => {
    setDobPicker(date)
    console.log('dob', date)
    setDob(date[0].toISOString())
  }

  const changeLoanDatePicker = (date) => {
    setLoanDatePicker(date)
    console.log('LoanDate', date)
    setLoanDate(date[0].toISOString())
  }

  const changeRepayDatePicker = (date) => {
    setRepayDatePicker(date)
    console.log('LoanDate', date)
    setRepayDate(date[0].toISOString())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Loan Proposal</CardTitle>
      </CardHeader>

      <CardBody>
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
            Address <font color="red">*</font>
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
            <Input type='text' placeholder='Building Name' value={data.buildingname} onChange={e => handleChange('buildingname', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Ownership
          </Label>
          <Col sm='5'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={ownershipOptions}
              isClearable
              value={ownershipOptions.find(obj => obj.value === data.ownership)}
              onChange={val => handleChange({ ...data, ownership: val.value })}
            />
          </Col>
          <Col sm='4'>
            <Input type='text' placeholder='Remark' value={data.buildingname} onChange={e => handleChange('buildingname', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Loan Date
          </Label>
          <Col sm='9'>
            <Flatpickr
              value={loanDatePicker}
              className='form-control'
              onChange={date => changeLoanDatePicker(date)}
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
            1st Repay Date
          </Label>
          <Col sm='9'>
            <Flatpickr
              value={repayDatePicker}
              className='form-control'
              onChange={date => changeRepayDatePicker(date)}
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
            Loan Amount
          </Label>
          <Col sm='4'>
            <Input type='text' placeholder='Loan Amount' value={data.buildingname} onChange={e => handleChange('buildingname', e.target.value)} />
          </Col>
          <Col sm='5'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={ownershipOptions}
              isClearable
              value={ownershipOptions.find(obj => obj.value === data.ownership)}
              onChange={val => handleChange({ ...data, ownership: val.value })}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Term
          </Label>
          <Col sm='4'>
            <Input type='text' placeholder='Term' defaultValue={'1'} value={data.buildingname} onChange={e => handleChange('buildingname', e.target.value)} />
          </Col>
          <Col sm='5'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='clear'
              options={ownershipOptions}
              isClearable
              value={ownershipOptions.find(obj => obj.value === data.ownership)}
              onChange={val => handleChange({ ...data, ownership: val.value })}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
          Interest p.a
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Interest p.a' defaultValue={'48.00'} value={data.buildingname} onChange={e => handleChange('buildingname', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
          Late Interest p.a
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Late Interest p.a' defaultValue={'48.00'} value={data.buildingname} onChange={e => handleChange('buildingname', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Type of Loan
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
              onChange={val => handleChange({ ...data, ownership: val.value })}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
          Loan Remark
          </Label>
          <Col sm='9'>
            <Input type='textarea' rows='3' placeholder='Specify' value={data.active_loan} onChange={e => handleChange('active_loan', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
          Repayment Remark (NOC)
          </Label>
          <Col sm='9'>
            <Input type='textarea' rows='3' placeholder='Specify' value={data.active_loan} onChange={e => handleChange('active_loan', e.target.value)} />
          </Col>
        </Row>
        
      </CardBody>
    </Card>
  )
}
export default LoanProposal
