const Footer = (props) => {
    return (
        <footer id="footer">
            <div className="container-xl">
                <span>© copyright: {props.author}</span>
            </div>
        </footer>
    );
}

export default Footer;