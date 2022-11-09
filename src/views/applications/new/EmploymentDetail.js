// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label, Input, FormText, Row, Col, Button } from 'reactstrap'

// ** Icons Imports
import { Check } from 'react-feather'

// ** Third Party Components
import Select from 'react-select'
import Flatpickr from 'react-flatpickr'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const bikOptions = [{ value: '1', label: 'bik' }]

const periodOptions = [
  { value: '1', label: 'Less than 1 year' },
  { value: '2', label: 'More than 1 year' },
  { value: '3', label: 'More than 3 year' }
]

const EmploymentDetail = ({ data, handleChange, salaryDate, setSalaryDate, handleSubmit }) => {
  // ** State
  const [salaryDatePicker, setSalaryDatePicker] = useState(salaryDate ? new Date(salaryDate) : new Date())

  const changeSalaryDatePicker = (date) => {
    setSalaryDatePicker(date)
    console.log('ApplicationDate', date)
    setSalaryDate(date[0].toISOString())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Employment Detail</CardTitle>
      </CardHeader>

      <CardBody>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Company Name
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Company Name' value={data.company_name} onChange={e => handleChange('company_name', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Company Reg. No.
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Company Reg. No.' value={data.company_reg_no} onChange={e => handleChange('company_reg_no', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Company Address
          </Label>
          <Col sm='3'>
            <Input type='text' placeholder='Postcode' value={data.company_postalcode} onChange={e => handleChange('company_postalcode', e.target.value)} />
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
            <Input type='text' placeholder='Unit' value={data.company_unit} onChange={e => handleChange('company_unit', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Street Name' value={data.company_streetname} onChange={e => handleChange('company_streetname', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='' value={data.company_buildingname} onChange={e => handleChange('company_buildingname', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Company Phone
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Company Phone' value={data.company_phone} onChange={e => handleChange('company_phone', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Position/Title
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Position/Title' value={data.position} onChange={e => handleChange('position', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Employment Period
          </Label>
          <Col sm='9'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={periodOptions[0]}
              options={periodOptions}
              isClearable={false}
              value={periodOptions.find(obj => obj.value === data.job_period)}
              onChange={val => handleChange('job_period', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Salary Date
          </Label>
          <Col sm='9'>
            <Flatpickr
              value={salaryDatePicker}
              id='hf-picker'
              className='form-control'
              onChange={date => changeSalaryDatePicker(date)}
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
            Monthly Salary <font color="red">*</font>
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Monthly Salary' value={data.monthly_salary} onChange={e => handleChange('monthly_salary', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Annual Income
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Annual Income' value={data.annual_income} onChange={e => handleChange('annual_income', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            NOK Name
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='NOK Name' value={data.nok_name} onChange={e => handleChange('nok_name', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
            Relationship
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Relationship' value={data.relationship} onChange={e => handleChange('relationship', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
          NOK Contact No.
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='NOK Phone' value={data.nok_phone} onChange={e => handleChange('nok_phone', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
          Additional NOK Name
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='NOK 2 Name' value={data.nok_name_2} onChange={e => handleChange('nok_name_2', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
          Relationship 2
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='Relationship 2' value={data.relationship_2} onChange={e => handleChange('relationship_2', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
          Additional NOK Contact No.
          </Label>
          <Col sm='9'>
            <Input type='text' placeholder='NOK 2 Phone' value={data.nok_phone_2} onChange={e => handleChange('nok_phone_2', e.target.value)} />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='3' className='form-label'>
          Remark
          </Label>
          <Col sm='9'>
            <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='' value={data.remark} onChange={e => handleChange('remark', e.target.value)} />
          </Col>
        </Row>
        <hr />

        <Row className='mb-1'>
          <Col sm='1'></Col>
          <Col sm='10' className='form-check form-check-inline'>
            <Input type='checkbox' id='basic-cb-checked-1' />
            <Label for='basic-cb-checked-1' className='me-1 form-check-label'>
              I declare that, at the time of this loan application, I am not bankrupted under Insolvency, Restructuring and Dissolution Act 2018.
            </Label>
          </Col>
        </Row>
        <Row className='mb-1'>
          <Col sm='1'></Col>
          <Col sm='10' className='form-check form-check-inline'>
            <Input type='checkbox' id='basic-cb-checked-1' />
            <Label for='basic-cb-checked-1' className='me-1 form-check-label'>
              I hereby declare that the above information provided by me is true and accurate to the best of my knowledge.
            </Label>
          </Col>
        </Row>
        <Row className='mb-1'>
          <Col sm='1'></Col>
          <Col sm='10' className='form-check form-check-inline'>
            <Input type='checkbox' id='basic-cb-checked-1' />
            <Label for='basic-cb-checked-1' className='me-1 form-check-label'>
            I have been informed that the information collated are used for credit management, assessment and debt recovery purposes. A misrepresentation or omission of facts required will be a sufficient cause for rejection.
            </Label>
          </Col>
        </Row>
        <Row className='mb-1'>
          <Col sm='12' className='demo-inline-spacing center' style={{ justifyContent: 'center' }}>
            <Button.Ripple color='success' onClick={handleSubmit}>
              <Check size={14} />
              <span className='align-middle ms-25'>Submit</span>
            </Button.Ripple>
            <Button.Ripple color='secondary' outline>
              Cancel
            </Button.Ripple>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default EmploymentDetail
