// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'
import classnames from 'classnames'
import { Box, Briefcase, Clipboard, CloudDrizzle } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Form, Label, Input } from 'reactstrap'

// ** Utils
import { moneyFormatter } from '@utils'

const LoanSummary = ({ cols }) => {
  const defaultData = [
    {
      title: '$0.00',
      subtitle: 'Total Sales',
      color: 'light-primary',
      icon: <Box size={24} />
    },
    {
      title: '$0.00',
      subtitle: 'Total Principal Paid',
      color: 'light-success',
      icon: <Briefcase size={24} />
    },
    {
      title: '$0.00',
      subtitle: 'Total Interest Paid',
      color: 'light-info',
      icon: <Clipboard size={24} />
    },
    {
      title: '$0.00',
      subtitle: 'Total OP Paid',
      color: 'light-danger',
      icon: <CloudDrizzle size={24} />
    }
  ]

  const options = [
    {
      id: 'today',
      label: 'Today'
    },
    {
      id: 'week',
      label: 'Week'
    },
    {
      id: 'month',
      label: 'Month'
    }
  ]

  const [data, setData] = useState(defaultData)
  const [option, setOption] = useState(options[0].id)

  useEffect(() => {
    axios.get(`/loansummary/${option}`)
      .then(response => {
        const responseData = response.data
        setData(defaultData.map((d, i) => {
          let value = 0
          switch (i) {
            case 0:
              value = moneyFormatter(responseData.total_loan ?? 0)
              break
            case 1:
              value = moneyFormatter(responseData.principal_amount ?? 0)
              break
            case 2:
              value = moneyFormatter(responseData.interest_amount ?? 0)
              break
            case 3:
              value = moneyFormatter(responseData.other_permit_amount ?? 0)
              break
            default:
              break
          }
          return { ...d, title: value}
        }))
      })
      .catch(err => console.log(err))
  }, [option])
  
  const changeOption = (e) => {
    setOption(e.target.value)
  }

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols)
      const margin = index === 2 ? 'sm' : colMargin[0]
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <Avatar color={item.color} icon={item.icon} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Loan Summary</CardTitle>
        <Form>
          <div className='d-flex align-items-center'>
            {options.map((o, i) => (
              <div className='d-flex align-items-center me-2' key={i}>
                <div className='form-check'>
                  <Input type='radio' name='LoanOption' id={`LoanOption_${o.id}`} defaultChecked={o.id === option} value={o.id} onChange={changeOption} />
                  <Label for={`LoanOption_${o.id}`} className='form-check-label'>
                    {o.label}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </Form>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default LoanSummary
