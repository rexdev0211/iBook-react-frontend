// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'
import classnames from 'classnames'
import { Globe, Layout } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Form, Label, Input } from 'reactstrap'

// ** Utils
import { kFormatter, moneyFormatter } from '@utils'

const CollectionSummary = ({ cols }) => {
  const defaultData = [
    {
      title: '0',
      subtitle: 'Total Collection',
      color: 'light-success',
      icon: <Globe size={24} />
    },
    {
      title: '$0.00k',
      subtitle: 'Total Collection Amount',
      color: 'light-info',
      icon: <Layout size={24} />
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
    axios.get(`/collectionsummary/${option}`)
      .then(response => {
        const responseData = response.data
        setData(defaultData.map((d, i) => {
          let value = 0
          switch (i) {
            case 0:
              value = kFormatter(responseData.total_collection_count ?? 0)
              break
            case 1:
              value = moneyFormatter(responseData.total_collection_amount ?? 0)
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
        <CardTitle tag='h4'>Collection Summary</CardTitle>
        <Form>
          <div className='d-flex align-items-center'>
            {options.map((o, i) => (
              <div className='d-flex align-items-center me-2' key={i}>
                <div className='form-check'>
                  <Input type='radio' name='CollectionOption' id={`CollectionOption_${o.id}`} defaultChecked={o.id === option} value={o.id} onChange={changeOption} />
                  <Label for={`CollectionOption_${o.id}`} className='form-check-label'>
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

export default CollectionSummary
