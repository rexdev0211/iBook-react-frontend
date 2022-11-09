// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Label, Input, FormText, Row, Col, Button } from 'reactstrap'

// ** Icons Imports
import { Check } from 'react-feather'

// ** Third Party Components
import Select from 'react-select'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const adminFeeOptions = [
  { value: 10, label: '10' },
  { value: 9, label: '9' },
  { value: 8, label: '8' },
  { value: 7, label: '7' },
  { value: 6, label: '6' },
  { value: 5, label: '5' },
  { value: 4, label: '4' },
  { value: 3, label: '3' },
  { value: 2, label: '2' },
  { value: 1, label: '1' },
  { value: 0, label: '0' }
]

const customFeeOptions = [
  { value: '1', label: 'Per Occasion' },
  { value: '2', label: 'Per month' }
]

const GeneralPermittedFee = ({ data, handleChange, handleSubmit }) => {
  
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>General & Permitted Fee</CardTitle>
      </CardHeader>

      <CardBody>
        <Row className='mb-1'>
          <Label sm='4' className='form-label'>
            Administrative Fee %
          </Label>
          <Col sm='4'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={adminFeeOptions[0]}
              options={adminFeeOptions}
              isClearable={false}
              value={adminFeeOptions.find(obj => obj.value === data.job_period)}
              onChange={val => handleChange('job_period', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='4' className='form-label'>
          Variation Fee %
          </Label>
          <Col sm='4'>
            <Input type='number' placeholder='Amt' value={data.company_name} onChange={e => handleChange('company_name', e.target.value)} />
          </Col>
          <Col sm='4'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={customFeeOptions[0]}
              options={customFeeOptions}
              isClearable={false}
              value={customFeeOptions.find(obj => obj.value === data.job_period)}
              onChange={val => handleChange('job_period', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='4' className='form-label'>
          Early Redemption Fee %
          </Label>
          <Col sm='4'>
            <Input type='number' placeholder='Amt' value={data.company_name} onChange={e => handleChange('company_name', e.target.value)} />
          </Col>
          <Col sm='4'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={customFeeOptions[0]}
              options={customFeeOptions}
              isClearable={false}
              value={customFeeOptions.find(obj => obj.value === data.job_period)}
              onChange={val => handleChange('job_period', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='4' className='form-label'>
          Legal Enforcement $
          </Label>
          <Col sm='4'>
            <Input type='number' placeholder='Amt' value={data.company_name} onChange={e => handleChange('company_name', e.target.value)} />
          </Col>
          <Col sm='4'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={customFeeOptions[0]}
              options={customFeeOptions}
              isClearable={false}
              value={customFeeOptions.find(obj => obj.value === data.job_period)}
              onChange={val => handleChange('job_period', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Label sm='4' className='form-label'>
          Late Repayment Fee $
          </Label>
          <Col sm='4'>
            <Input type='number' placeholder='Amt' value={data.company_name} onChange={e => handleChange('company_name', e.target.value)} />
          </Col>
          <Col sm='4'>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={customFeeOptions[0]}
              options={customFeeOptions}
              isClearable={false}
              value={customFeeOptions.find(obj => obj.value === data.job_period)}
              onChange={val => handleChange('job_period', val.value)}
            />
          </Col>
        </Row>
        <Row className='mb-1'>
          <Col sm='12' className='demo-inline-spacing center' style={{ justifyContent: 'center' }}>
            <Button.Ripple color='primary' onClick={handleSubmit}>
              <Check size={14} />
              <span className='align-middle ms-25'>Calculate</span>
            </Button.Ripple>
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
export default GeneralPermittedFee
