import React from 'react'

const menu = [
    {
        path: '#/',
        label: 'Dashboard',
        icon: 'dashboard'
    },
    {
        label: 'Dashboard',
        icon: 'dashboard',
        menu: [
            {
                path: '#/billingCycles',
                label: 'Ciclo de Pagamentos',
                icon: 'usd'
            }
        ]
    }
]

export default (props) => {

    const renderMenu = () => {
        return menu.map((item) => {
            const list = item.menu || []
            if (list.length == 0) 
                return (
                    <li key={`${Math.random()}`}><a href={item.path}><i className={`fa fa-${item.icon}`}></i> {item.label}</a></li>
                )
                
            return (
                <li className='treeview' key={`${Math.random()}`}>
                    <a href>
                        <i className={`fa fa-${item.icon}`}></i> {item.label}
                        <i className='fa fa-angle-left pull-right'></i>
                    </a>
                    <ul className='treeview-menu'>
                        {list.map(subm => (<li key={`${Math.random()}`}><a href={subm.path}><i className={`fa fa-${subm.icon}`}></i> {subm.label}</a></li>))}
                    </ul>
                </li>
            )
        })
    }

    return (
        <ul className='sidebar-menu'>
            {renderMenu()}
        </ul>
    )
}