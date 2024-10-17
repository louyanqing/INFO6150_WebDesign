import '../styles/component-navbar.scss';

// import {Menu} from 'antd';

const Navbar = () => {
    const menu = [
        {
            label: 'About',
            icon: '',
            id: 'about',
            children: []
        }, {
            label: 'Events',
            id: 'events',
            children: []
        }, {
            label: 'Services',
            id: 'services',
            children: [{
                label: 'ESL Serices',
                id: 'esl-serices',
                children: []
            }, {
                label: 'Marketing',
                id: 'marketing',
                children: []
            }]
        }, {
            label: 'Contact',
            id: 'contact',
            children: []
        }
    ];


    const renderMenu = (items) => {
        return items.map((item, index) => (
            <li key={item.id} className={`nav-item ${item.children.length ? 'dropdown-toggle dropdown-item' : ''}`}>
                <a
                    className={`nav-link ${item.children.length ? 'dropdown-toggle' : ''}`}
                    href=''
                    role={item.children.length ? 'button' : undefined}
                    data-bs-toggle={item.children.length ? 'dropdown' : 'undefined'}
                    aria-expanded={item.children.length ? 'false' : 'undefined'}
                >{item.label}</a>
                {item.children.length > 0 && (
                    subMenu(item.children)
                )}
            </li>
        ))
    }

    const subMenu = (subItems) => {
        return (
            <ul className='dropdown-menu'>
                {subItems.map((subItem) => (
                    <li key={subItem.id}>
                        <a className="dropdown-item" href="#">{subItem.label}</a>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MagicLibrary</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">EVENTS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                SERVICES
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">ESL Serices</a></li>
                                <li><a className="dropdown-item" href="#">Marketing</a></li>                          
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success" type="submit">Login</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
