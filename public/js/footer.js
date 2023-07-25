const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/dark-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li><a href="best.html" class="category-title">Best Sellers</a></li>            
            <ul class="category">
                <li><a href="discount.html" class="category-title">Discounts</a></li>                
            </ul>
            <ul class="category">
                <li><a href="product.html" class="category-title">Everything</a></li>                
            </ul>  
            <ul class="category">
                <li><a href="intex.html" class="category-title">Home</a></li>                
            </ul>          
        </div>
    </div>
    <p class="footer-title">About US</p>
    <p class="info">This movie shop website was made for educational purposes. It was created for CSCI 3354 Web Application Development
        course in summer of 2023. It features a small variety of movies that are 'forsale'.</p>
    <p class="info">support emails - help@movies.com, customersupport@movies.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="https://www.instagram.com/accounts/login/" class="social-link">instagram</a>
            <a href="https://www.facebook.com/login/" class="social-link">facebook</a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Movies, Best movie online store</p>
    `;
}

createFooter();