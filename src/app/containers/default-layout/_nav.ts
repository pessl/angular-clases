import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  /*{
    title: true,
    name: 'opciones'
  },
  {
    name: 'Registrar Información',
    url: '/forms/registernewinfo',
    iconComponent: { name: 'cil-notes' }
  },*/
 /* {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },*/
  {
    name: 'Socio ambiental',
    title: true
  },
  {
    name: 'Evaluación socio A',
    url: '/forms',
    /*iconComponent: { name: 'cil-notes' },*/
    children: [
      {
        name: 'Bandeja',
        url: '/forms/registernewinfo',
        iconComponent: { name: 'cil-notes' }
      },
      {
        name: 'Registrar',
        url: '/forms/Registrar'
      },
      {
        name: 'Registrar y/o Aprobar',
        url: '/forms/Registrar-aprobar'
      },
      {
        name: 'Geolocalizacion',
        url: '/forms/geolocalizacion'
      },
      {
        name: 'Aprobacion',
        url: '/forms/arpobacion-esa'
      },
      {
        name: 'Analizar Información',
        url: '/forms/analizar-info-evalsa'
      },
      {
        name: 'Registrar Información',
        url: '/forms/registrar-informacion'
      },

    ]
  },
  // PROCESO ACOMPAÑAMIENTO SOCIOAMBIENTAL
  // =====================================

  {
    name: 'Acompañamiento',
    url: '/forms',
    /*iconComponent: { name: 'cil-notes' },*/
    children: [
      {
        name: 'Registrar solicitud ASA',
        url: '/forms/registrar-solicitud-asa',
        iconComponent: { name: 'cil-notes' }
      },
      {
        name: 'Responder Solicitud',
        url: '/forms/correo-respuesta-asa'
      },
      {
        name: 'Documentos EAT',
        url: '/forms/documentos-eat'
      },
      {
        name: 'Documentos EAC',
        url: '/forms/documentos-eac'
      },
      {
        name: 'Reporte de Participación',
        url: '/forms/reporte-participacion-asa'
      },
      {
        name: 'Reporte de Acompañamiento',
        url: '/forms/reporte-asa'
      },
      {
        name: 'Aprobación de Informe',
        url: '/forms/aprobar-informe-asa'
      }
    ]
  },
  {
    name: 'Control de deudas',
    title: true
  },
  {
    name: 'Multas',
    url: '/forms',
    /*iconComponent: { name: 'cil-notes' },*/
    children: [
      {
        name: 'Multas2',
        url: '/forms/registernewinfo',
       /* iconComponent: { name: 'cil-notes' } */
      },
      {
        name: 'Sub-proceso2-sub',
        url: '/forms/select'
      },
      {
        name: 'Sub-proceso2-sub',
        url: '/forms/checks-radios'
      },
      {
        name: 'Sub-proceso2-sub',
        url: '/forms/range'
      },

    ]
  },
  /*{
    name: 'Charts',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },*/
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
/*  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'py-0'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/templates/installation',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank', class: '-text-dark' },
    class: 'mt-auto'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'https://coreui.io/product/angular-dashboard-template/',
    iconComponent: { name: 'cil-layers' },
    attributes: { target: '_blank' }
  } */
];
