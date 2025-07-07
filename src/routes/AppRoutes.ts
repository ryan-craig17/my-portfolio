import NavMenuItem from "../types/NavMenuItem";

export const AppRoutes = [
    {
        title: 'Home',
        url: '/',
        enabled: true,
        topLevel: true,

    },
    {
        title: 'Contact',
        url: '/contact',
        enabled: true,
        topLevel: true,
    },
    {
        title: 'Portfolio',
        url: '/portfolio',
        enabled: false,
        topLevel: true,
    },
    {
        title: 'Space Station',
        url: '/space-station',
        enabled: false, 
        topLevel: true,
        subMenuItems: [
            {
                title: '',
                url: '',
                enabled: true, 
                topLevel: false,
            }
        ]
    }
] as NavMenuItem[]; 