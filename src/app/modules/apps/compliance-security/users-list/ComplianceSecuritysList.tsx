import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UsersListHeader} from './components/header/UsersListHeader'
import {UsersTable} from './table/UsersTable'
import {KTCard} from '../../../../../_metronic/helpers'

const ComplianceSecurity = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <UsersListHeader />
        <UsersTable />
      </KTCard>
    </>
  )
}

const ComplianceSecurityWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ComplianceSecurity />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ComplianceSecurityWrapper}
