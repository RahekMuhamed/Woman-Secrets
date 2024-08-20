  <template>
    <footer class="footer">
      <div class="footer-columns">
        <div class="column">
          <h3>Informations</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Service</a></li>
            <li><a href="#">Our Product</a></li>
          </ul>
        </div>
        <div class="column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div class="column logo-column">
          <img src="../../assets/Logo.svg" alt="Logo" id="logo"/>
        </div>
        <div class="column">
          <h3>Contacts</h3>
          <ul>
            <li><a href="tel:0096644467356">+1 (123) 456-7890</a></li>
            <li>
              <a href="mailto:support@womansecrets.com">contact@example.com</a>
            </li>
            <li>
              <ul class="footer-icons">
                <li>
                  <a href="#"
                    ><img
                      src="../../assets/twitter.svg"
                      alt=" twitter  "
                      class="icon"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="../../assets/instagram.svg"
                      alt="instagram"
                      class="icon"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="../../assets/facebook.svg"
                      alt="facebook"
                      class="icon"
                  /></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="column">
          <h3>Subscribe For More</h3>
          <ul>
            <li>
              <input
                type="email"
                placeholder="Enter your mail"
                class="styled-input"
              />
            </li>
            <li><button class="styled-button">Send</button></li>
          </ul>
        </div>
      </div>
      <div class="copy-rights">
        <p>2010 &copy; All Rights Reseved</p>
      </div>
    </footer>
  </template>
  <style scoped>
  .footer {
    background: #deebf6;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .footer-columns {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
    margin-bottom: 20px;
  }
  
  .column {
    display: flex;
    flex-direction: column;
  }
  
  .column h3 {
    font-family: "League Spartan";
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  
  .column ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .column li {
    margin-bottom: 10px;
  }
  
  .column a {
    text-decoration: none;
    color: #020203;
  }
  
  .column a:hover {
    text-decoration: underline;
  }
  
  .footer-icons {
    display: flex;
    align-items: center;
  }
  
  .icon {
    margin: 5px;
  }
  
  #logo {
    width: 200px;
    height: auto;
  }
  
  .logo-column {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .styled-input {
    height: 37px;
    padding: 10px;
    border-radius: 24px;
    border: none;
    font-size: 16px;
    text-align: center;
  }
  
  .styled-input::placeholder {
    color: #999;
  }
  
  .styled-button {
    width: 69px;
    height: 35px;
    border-radius: 50px;
    border: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Media Queries */
  @media (max-width: 767px) {
    .footer-columns {
      grid-template-columns: 1fr;
    }
  
    .column h3 {
      font-size: 18px;
    }
  
    #logo {
      width: 120px;
    }
  
    .styled-button {
      width: 80px;
    }
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    .footer-columns {
      grid-template-columns: repeat(2, 1fr);
    }
  
    .column h3 {
      font-size: 20px;
    }
  
    #logo {
      width: 150px;
    }
  
    .styled-button {
      width: 90px;
    }
  }
  
  @media (min-width: 1024px) {
    .footer-columns {
      grid-template-columns: repeat(5, 1fr);
    }
  
    .column h3 {
      font-size: 24px;
    }
  
    #logo {
      width: 200px;
    }
  
    .styled-button {
      width: 100px;
    }
  }
  
  .copy-rights {
    text-align: center;
    padding: 20px;
    border-top: 1px solid #c2c2d6;
  }
  </style>
  