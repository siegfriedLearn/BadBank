
export const Footer = () => {
  return (
    // 
    <footer id="footer">
        <div
          className="d-flex justify-content-center"
          style={{ background: "#8F7FE8"}}
        >
          <div
            className="d-flex align-items-center"
            style={{paddingRight: '20px', color: 'aliceblue'}}
          >
            Contáctame
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/carlos-medina-b07b161a2/"
               target="_blank" rel="noreferrer"
            >
              <img src="./linkedin.png" alt="" width="20px" height="20px" target="_blank" rel="noreferrer"/>
            </a>
            <a href="mailto:cammediname@hotmail.com">
              <img src="./mail.png" alt="" width="30px" height="30px" target="_blank" rel="noreferrer"/>
            </a>
            <a href="https://wa.me/+573012671359">
              <img src="./whatsapp.png" alt="" width="20px" height="20px" target="_blank" rel="noreferrer"/>
            </a>
          </div>
        </div>
      </footer>
  );
};
