const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t</a></li>
                <li><a href="#" class="footer-link">s</a></li>
                <li><a href="#" class="footer-link">i</a></li>
                <li><a href="#" class="footer-link">js</a></li>
                <li><a href="#" class="footer-link">r</a></li>
                <li><a href="#" class="footer-link">o</a></li>
                <li><a href="#" class="footer-link">c</a></li>
                <li><a href="#" class="footer-link">f</a></li>
                <li><a href="#" class="footer-link">p</a></li>
                <li><a href="#" class="footer-link">w</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">e</a></li>
                <li><a href="#" class="footer-link">i</a></li>
                <li><a href="#" class="footer-link">j</a></li>
                <li><a href="#" class="footer-link">r</a></li>
                <li><a href="#" class="footer-link">h</a></li>
                <li><a href="#" class="footer-link">c</a></li>
                <li><a href="#" class="footer-link">f</a></li>
                <li><a href="#" class="footer-link">p</a></li>
                <li><a href="#" class="footer-link">w</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
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
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();