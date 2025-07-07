type NavMenuItem = {
    title: string,
    url: string,
    enabled: boolean,
    topLevel: boolean,
    subMenuItems: NavMenuItem[]
}

export default NavMenuItem;