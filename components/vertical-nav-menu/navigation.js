import {
  mdiHome,
  mdiAccountMultiple,
  mdiArchive,
  mdiCart,
  mdiFilePdfBox,
  mdiCash,
  mdiFileChart,
  mdiCogs,
  mdiPackageVariant
} from '@mdi/js'

export default [
  {
    title: 'Dashboard',
    icon: mdiHome,
    to: '/dashboard',
  },
  {
    title: 'Clientes',
    icon: mdiAccountMultiple,
    to: '/customers',
  },
  {
    title: 'Produtos',
    icon: mdiArchive,
    to: '/products',
  },
  {
    title: 'Pacotes',
    icon: mdiPackageVariant,
    to: '/packages',
  },
  {
    title: 'Pedidos',
    icon: mdiCart,
    to: '/orders',
  },
  {
    title: 'Notas Fiscais',
    icon: mdiFilePdfBox,
    to: '/notas-fiscais',
  },
  {
    title: 'Financeiro',
    icon: mdiCash,
    to: '/finances',
  },
  {
    title: 'Relatórios',
    icon: mdiFileChart,
    to: '/reports',
  },
  {
    title: 'Configurações',
    icon: mdiCogs,
    to: '/settings',
  },
]
