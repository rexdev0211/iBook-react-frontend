// ** Reactstrap Imports
import { Table } from 'reactstrap'

const CollectionIncomingTable = () => {
  const data = [
    {
      date: new Date().toLocaleDateString(),
      branch: '',
      loanNo: '7299/2021',
      nric: 'G2918124T',
      name: 'TEO WEI HERNG',
      description: 'Pass Invalid - MIA | To check if back to Singapore',
      pp: '-',
      ip: '-',
      op: '-',
      total: '-',
      account: 'Cash'
    },
    {
      date: new Date().toLocaleDateString(),
      branch: '',
      loanNo: '7291/2021',
      nric: 'F8381104T',
      name: 'SARAVANAN A/L MANIKAM',
      description: 'To follow up by Collection: Went back to Malaysia, WP invalid',
      pp: '-',
      ip: '-',
      op: '-',
      total: '-',
      account: 'Cash'
    },
    {
      date: new Date().toLocaleDateString(),
      branch: '',
      loanNo: '6020/2021',
      nric: 'S8900782H',
      name: 'MUHAMMAD DZULKANAIN BIN JALIL',
      description: 'Awaiting letter from IPTO (Bal $1973.82)',
      pp: '-',
      ip: '-',
      op: '-',
      total: '-',
      account: 'PL DBS'
    }
  ]

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Branch</th>
          <th>Loan No.</th>
          <th>NRIC</th>
          <th>Name</th>
          <th>Description/Remarks</th>
          <th>PP</th>
          <th>IP</th>
          <th>OP</th>
          <th>Total</th>
          <th>Account</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{row.date}</td>
            <td>{row.branch}</td>
            <td>{row.loanNo}</td>
            <td>{row.nric}</td>
            <td>{row.name}</td>
            <td>{row.description}</td>
            <td>{row.pp}</td>
            <td>{row.ip}</td>
            <td>{row.op}</td>
            <td>{row.total}</td>
            <td>{row.account}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CollectionIncomingTable
