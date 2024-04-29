import "./Header.css";
const Header = () => {
    const handleMenuItemClick = (event) => {
        // Remove the active class from all menu items
        const menuItems = document.querySelectorAll('.menu a');
        menuItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add the active class to the clicked menu item
        event.target.classList.add('active');
    };

    return (
        <>
            <header className="header">
                <nav>
                    <ul className="menu">
                        <li><a href="#" onClick={handleMenuItemClick}>Projects</a></li>
                        <li><a href="#" onClick={handleMenuItemClick}>About</a></li>
                        <li><a href="#" onClick={handleMenuItemClick}>Contact</a></li>

                    </ul>
                </nav>
                <div className="logo1">
                    <a href="/projects">
                        <div className="image-container">
                            <img src="https://cdn.myportfolio.com/570fa894016684b1a5772208d22d2909/f1880aab-8b02-4039-9ae7-416b54658a85_rwc_0x0x800x400x4096.png?h=d1c1a4d9f330f5c53fee088fb5f71bd9" alt="Wallnuts Murals" />
                            <div className="image-rollover"></div>
                        </div>
                    </a>

                </div>
                <div className="social-icons">
                    <ul className="icons-list">
                        <li>
                            <a href="http://instagram.com/wallnutsmurals" target="_blank" rel="noreferrer">
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 24" style={{ enableBackground: 'new 0 0 30 24' }} xmlSpace="preserve">
                                    <path d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c-0.1-0.4-0.3-0.6-0.6-0.9c-0.3-0.3-0.5-0.5-0.9-0.6c-0.3-0.1-0.7-0.2-1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z">
                                    </path>
                                    <path d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z">
                                    </path>
                                    <path d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://dribbble.com/Wallnuts-Murals" target="_blank" rel="noreferrer">
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 30 24" xmlSpace="preserve">
                                    <path d="M15 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c4.41 0 8 3.6 8 8S19.41 20 15 20L15 20z M21.75 13.1 c-0.23-0.07-2.12-0.64-4.26-0.29c0.89 2.5 1.3 4.5 1.3 4.87C20.35 16.6 21.4 15 21.8 13.1L21.75 13.1z M17.67 18.3 c-0.1-0.6-0.5-2.69-1.46-5.18c-0.02 0-0.03 0.01-0.05 0.01c-3.85 1.34-5.24 4.02-5.36 4.27c1.16 0.9 2.6 1.4 4.2 1.4 C15.95 18.8 16.9 18.6 17.7 18.3L17.67 18.3z M9.92 16.58c0.15-0.27 2.03-3.37 5.55-4.51c0.09-0.03 0.18-0.06 0.27-0.08 c-0.17-0.39-0.36-0.78-0.55-1.16c-3.41 1.02-6.72 0.98-7.02 0.97c0 0.1 0 0.1 0 0.21C8.17 13.8 8.8 15.4 9.9 16.58L9.92 16.6 z M8.31 10.61c0.31 0 3.1 0 6.32-0.83c-1.13-2.01-2.35-3.7-2.53-3.95C10.18 6.7 8.8 8.5 8.3 10.61L8.31 10.61z M13.4 5.4 c0.19 0.2 1.4 1.9 2.5 4c2.43-0.91 3.46-2.29 3.58-2.47C18.32 5.8 16.7 5.2 15 5.18C14.45 5.2 13.9 5.2 13.4 5.4 L13.4 5.37z M20.29 7.69c-0.14 0.19-1.29 1.66-3.82 2.69c0.16 0.3 0.3 0.7 0.5 0.99c0.05 0.1 0.1 0.2 0.1 0.3 c2.27-0.29 4.5 0.2 4.8 0.22C21.82 10.3 21.2 8.8 20.3 7.69L20.29 7.69z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="http://vimeo.com/wallnutsmurals" target="_blank" rel="noreferrer">
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 30 24" xmlSpace="preserve">
                                    <path d="M23.99 7.7c-0.08 1.8-1.3 4.27-3.67 7.4c-2.45 3.27-4.52 4.9-6.21 4.9c-1.05 0-1.94-0.99-2.66-2.99 c-0.48-1.82-0.97-3.65-1.45-5.48C9.46 9.6 8.9 8.6 8.3 8.55c-0.13 0-0.61 0.29-1.41 0.87L6 8.3C6.89 7.5 7.8 6.7 8.6 5.9 c1.18-1.05 2.07-1.61 2.67-1.66c1.4-0.14 2.3 0.8 2.6 2.95c0.35 2.3 0.6 3.7 0.7 4.24c0.4 1.9 0.8 2.8 1.3 2.8 c0.38 0 0.94-0.61 1.7-1.84c0.75-1.22 1.16-2.16 1.21-2.79c0.11-1.06-0.3-1.59-1.21-1.59c-0.43 0-0.88 0.1-1.33 0.3 c0.88-2.98 2.58-4.43 5.07-4.34C23.23 4.1 24.1 5.3 24 7.7z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header