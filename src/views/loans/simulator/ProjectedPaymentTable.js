// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const ProjectedPaymentTable = () => {
  const data = [
    {
      date: 'Date',
      principle: 0,
      interest: 0,
      lateInterest: 0,
      lateFees: 0,
      totalAmountPaid: 0,
      outPrinciple: 0
    },
    {
      date: 'Total',
      principle: 0,
      interest: 0,
      lateInterest: 0,
      lateFees: 0,
      totalAmountPaid: 0,
      outPrinciple: 0
    }
  ]

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Date</th>
          <th>Principal</th>
          <th>Interest</th>
          <th>Late Interest</th>
          <th>Late Fees</th>
          <th>Total Amount Paid</th>
          <th>Out. Principal</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.date}</td>
            <td>{row.principle}</td>
            <td>{row.interest}</td>
            <td>{row.lateInterest}</td>
            <td>{row.lateFees}</td>
            <td>{row.totalAmountPaid}</td>
            <td>{row.outPrinciple}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ProjectedPaymentTable
